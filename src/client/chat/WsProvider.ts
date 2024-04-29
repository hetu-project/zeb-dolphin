import { ZMessage } from '@/proto/zmessage';
import { EventEmitter } from 'eventemitter3';
export default class WsProvider {
  private websocket: WebSocket | null;
  private endpoints: string;
  private eventemitter: EventEmitter;
  constructor(endpoint: string | string[]) {
    this.websocket = null;
    this.eventemitter = new EventEmitter();
    const endpoints = Array.isArray(endpoint) ? endpoint : [endpoint];
    const defaultEndpoint = endpoints[0];
    this.endpoints = defaultEndpoint;
  }
  public async connect(): Promise<void> {
    this.websocket = new WebSocket(this.endpoints);
    if (this.websocket) {
      this.websocket.onmessage = this.onSocketMessage;
    }
  }
  disconnect(): Promise<void> {
    return Promise.resolve();
  }
  private onSocketMessage = (message: MessageEvent<Blob>): void => {
    message.data.arrayBuffer().then(buffer => {
      const decoded = ZMessage.decode(new Uint8Array(buffer));
      this.eventemitter.emit('receive:message', decoded);
    });
  };
  addEventListener( event: string, cb: (message: ZMessage) => void) {
    this.eventemitter.addListener(event, cb);
  }
  removeEventListener( event: string, cb: (message: ZMessage) => void) {
    this.eventemitter.removeListener(event, cb);
  }
  sendMessage(message: Uint8Array) {
    this.websocket?.send(message);
  }
}
