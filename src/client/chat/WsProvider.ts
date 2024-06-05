import { EventEmitter } from 'eventemitter3';
import { ChatMessage } from '@/proto/ChatMessage';
import { InboundMsg } from '@/proto/ZMsg';
export const noop = () => {};

const RETRY_DELAY = 5_000;

export default class WsProvider {
  websocket: WebSocket | null = null;
  private endpoints: string;
  private autoConnectMs = RETRY_DELAY;
  public readonly isReadyPromise: Promise<WsProvider>;
  eventemitter: EventEmitter;
  constructor(endpoint: string | string[]) {
    this.eventemitter = new EventEmitter();
    const endpoints = Array.isArray(endpoint) ? endpoint : [endpoint];
    const defaultEndpoint = endpoints[0];
    this.endpoints = defaultEndpoint;
    if (this.autoConnectMs && this.autoConnectMs > 0) {
      this.connectWithRetry().catch(noop);
    }
    this.isReadyPromise = new Promise((resolve): void => {
      this.eventemitter.once('connected', (): void => {
        resolve(this);
      });
    });
  }

  public async connectWithRetry(): Promise<void> {
    if (this.autoConnectMs > 0) {
      try {
        await this.connect();
      } catch {
        setTimeout((): void => {
          this.connectWithRetry().catch(noop);
        }, this.autoConnectMs);
      }
    }
  }
  public async connect(): Promise<void> {
    if (this.websocket) {
      throw new Error('WebSocket is already connected');
    }
    try {
      this.websocket = new WebSocket(this.endpoints);
      if (this.websocket) {
        this.websocket.onmessage = this.onSocketMessage;
        this.websocket.onerror = this.handleError;
        this.websocket.onclose = this.handleClose;
        this.websocket.onopen = this.handleSocketOpen;
      }
    } catch (error) {
      // l.error(error);

      this.eventemitter.emit('error', error);

      throw error;
    }
  }
  public async disconnect(): Promise<void> {
    this.autoConnectMs = 0;
    try {
      if (this.websocket) {
        // 1000 - Normal closure; the connection successfully completed
        this.websocket.close(1000);
        this.eventemitter.removeAllListeners();
      }
    } catch (error) {
      console.error(error);

      this.eventemitter.emit('error', error);

      throw error;
    }
  }

  private onSocketMessage = (message: MessageEvent<Blob>): void => {
    message.data.arrayBuffer().then(buffer => {
      // const decodedOrigin = ZChat.decode(new Uint8Array(buffer));
      // console.log('onSocketMessage', decodedOrigin);
      // const decoded = ZMessage.create({
      //   data: new Uint8Array(buffer),
      // });

      const inboundMsg = InboundMsg.decode(new Uint8Array(buffer));

      const chatMessage = ChatMessage.decode(inboundMsg.data);
      chatMessage.id = inboundMsg.id;
      console.log('onSocketMessage buffer', chatMessage);
      console.log('onSocketMessage chat Message', chatMessage);
      this.eventemitter.emit('account_receiveMessage', chatMessage);
    });

    // const response = JSON.parse(message.data) as JsonRpcResponse<string>;
    // console.log('onSocketMessage', message);

    // return response.method === undefined ? this.onSocketMessageResult(response) : this.onSocketMessageResult(response);
  };
  on(type: string, sub: () => void): () => void {
    this.eventemitter.on(type, sub);
    return (): void => {
      this.eventemitter.removeListener(type, sub);
    };
  }
  addEventListener(method: string, cb: (result: unknown) => void) {
    this.eventemitter.addListener(method, cb);
  }
  sendMessage(message: Uint8Array) {
    this.websocket!.send(message);
  }
  handleError = () => {
    if (this.websocket) {
      this.websocket.onclose = null;
      this.websocket.onerror = null;
      this.websocket.onmessage = null;
      this.websocket.onopen = null;
      this.websocket = null;
    }
    if (this.autoConnectMs > 0) {
      setTimeout((): void => {
        this.connectWithRetry().catch(noop);
      }, this.autoConnectMs);
    }
    this.eventemitter.emit('error');
  };
  handleSocketOpen = () => {
    this.eventemitter.emit('connected');
  };
  handleClose = () => {
    if (this.websocket) {
      this.websocket.onclose = null;
      this.websocket.onerror = null;
      this.websocket.onmessage = null;
      this.websocket.onopen = null;
      this.websocket = null;
    }
    if (this.autoConnectMs > 0) {
      setTimeout((): void => {
        this.connectWithRetry().catch(noop);
      }, this.autoConnectMs);
    }
    this.eventemitter.emit('close');
    this.eventemitter.emit('disconnected');
  };
}
