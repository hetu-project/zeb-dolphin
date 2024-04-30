import { ChatMessage, ChatType } from '@/proto/ChatMessage';
import { ZMessage, ZType } from '@/proto/zmessage';
import { stringToU8a, stringToU8a as u8aToU8a } from '@/utils';
import { blake2s } from '@noble/hashes/blake2s';
import WsProvider from './WsProvider';

export interface JsonRpcObject {
  id: number;
  jsonrpc: '2.0';
}

export interface JsonRpcRequest extends JsonRpcObject {
  method: string;
  params: unknown;
}

export interface JsonRpcResponseBaseError {
  code: number;
  data?: number | string;
  message: string;
}

export interface RpcErrorInterface<T> {
  code: number;
  data?: T;
  message: string;
  stack: string;
}

interface JsonRpcResponseSingle<T> {
  error?: JsonRpcResponseBaseError;
  result: T;
}

interface JsonRpcResponseSubscription<T> {
  method?: string;
  params: {
    error?: JsonRpcResponseBaseError;
    result: T;
    subscription: number | string;
  };
}

export type JsonRpcResponseBase<T> = JsonRpcResponseSingle<T> & JsonRpcResponseSubscription<T>;

export type JsonRpcResponse<T> = JsonRpcObject & JsonRpcResponseBase<T>;

export interface ChatApiOptions {
  provider?: WsProvider;
  url?: string[];
}
export default class ChatApi {
  private isReadyPromise: Promise<ChatApi>;
  provider: WsProvider;
  constructor(options?: ChatApiOptions) {
    if(!options?.provider) {
      this.provider = new WsProvider([]);
    }else{
      this.provider = options.provider;
    }
    this.isReadyPromise = new Promise(resolve => {
      this.provider.connect().then(() => {
        resolve(this);
      });
    });
  }

  public static create(options?: ChatApiOptions): ChatApi {
    const newOptions: ChatApiOptions = {
      ...options
    }
    if(!newOptions?.provider) {
      newOptions.provider = new WsProvider(newOptions.url || []);
    }
    const instance = new ChatApi(newOptions);
    return instance;
  }
  public get isReady(): Promise<ChatApi> {
    return this.isReadyPromise;
  }

  public async sendMessage(from: string, to: string, message: string, node: string, signature?: Uint8Array) {
    const chatMessage = ChatMessage.create({
      id: blake2s(stringToU8a(message + new Date().getMilliseconds())),
      version: 0,
      type: ChatType.CHAT_TYPE_MESSAGE,
      publicKey: u8aToU8a(from),
      data: stringToU8a(message),
      signature: u8aToU8a(message),
      from: u8aToU8a(from),
      to: u8aToU8a(to),
    });
    const chatBuffer = ChatMessage.encode(chatMessage).finish();
    const hashId = blake2s(chatBuffer);
    const messageCreated = ZMessage.create({
      id: hashId,
      version: 0,
      type: ZType.Z_TYPE_RNG,
      publicKey: u8aToU8a(from),
      data: chatBuffer,
      signature: signature,
      from: u8aToU8a(from),
      to: u8aToU8a(node),
    });
    const buffer = ZMessage.encode(messageCreated).finish();

    console.log('messageCreated', messageCreated);

    this.provider.sendMessage(buffer);
  }

  public async subscribeReceiveMessage(cb: (message: ZMessage) => void) {
    this.provider.addEventListener('receive:message', cb);
  }
  public async unsubscribeReceiveMessage(cb: (message: ZMessage) => void) {
    this.provider.removeEventListener('receive:message', cb);
  }
}
