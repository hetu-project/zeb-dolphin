import { ChatMessage } from '../../proto/ChatMessage';
// import { messageStorageSortKey } from '@root/src/shared/account';
import WsProvider from './WsProvider';
// import keystoreStorage from '@root/src/shared/storages/keystoreStorage';
// import messagesSessionStorage from '@root/src/shared/storages/messageSessionStorage';
// import messagesStorage from '@root/src/shared/storages/messageStorage';
import { hexToU8a, u8aToHex } from '@/utils';
import ChatApi from './ChatApi';
import EventEmitter from 'eventemitter3';

export class BackendChat {
  isDisconnect: boolean = false;
  chatApi: ChatApi;
  endpoint?: string;
  seedRpc?: string;
  eventemitter: EventEmitter;
  constructor() {
    this.eventemitter = new EventEmitter();
    this.chatApi = new ChatApi();
  }

  changeEndPoint(endpoint: string, seedRpc?: string) {
    if (this.chatApi?.provider) {
      this.chatApi.provider.disconnect();
    }
    this.endpoint = endpoint;
    const wsProvider = new WsProvider(endpoint);
    this.chatApi = new ChatApi({
      provider: wsProvider,
      seedRpc: seedRpc || this.seedRpc || '',
    });
    this.chatApi.accountSubscribeMessage(this.onMessage as never);
    this.chatApi.onError(this.onError);
    return this.chatApi.isReady;
  }

  async sendMessage(
    from: string,
    to: string,
    message: string,
    fromNode: string,
    toNode: string,
    signature?: Uint8Array,
  ) {
    const data = {
      from,
      to,
      message,
      fromNode,
      toNode,
      signature,
    };
    console.log('BackendChat', this.chatApi, data);
    const outMsg = await this.chatApi.accountSendMessage(from, to, message, fromNode, toNode, signature);
    // const storageKey = messageStorageSortKey(from, to);
    const mf = {
      id: u8aToHex(outMsg.id),
      from,
      to,
      message,
      sign: '',
    };
    return mf;
    // messagesStorage.addMessage(storageKey, mf);
    // messagesSessionStorage.updateSession(mf.from, { to: mf.to });
  }

  switchSeedRpc = async (rpc: string, address: string) => {
    this.seedRpc = rpc;
    this.chatApi.seedRpcServer = rpc;
    // const address = await keystoreStorage.get();
    if (!address) return;
    // await keystoreStorage.set(address);
    const data = await this.chatApi.getEndpoint(address);
    if (!data) return;
    const url = new URL(data.wsAddr);
    const wsUrl = `${data.wsAddr}/ws${url.port}`;
    await this.changeEndPoint(wsUrl);
    this.chatApi.provider!.websocket!.send(hexToU8a(address));
  };

  changeAccount = async (address: string) => {
    if (!address) return;
    // await keystoreStorage.set(address);
    const data = await this.chatApi.getEndpoint(address);
    if (!data) return;
    const url = new URL(data.wsAddr);
    const wsUrl = `${data.wsAddr}/ws${url.port}`;
    await this.changeEndPoint(wsUrl);
    this.chatApi?.provider?.websocket?.send(hexToU8a(address));
  };

  onMessage = async (chatMessage: ChatMessage) => {

    try {
      this.eventemitter.emit('onMessage', chatMessage);
      console.log('onMessage', this)
    } catch (error) {
      console.error('message decode error', error);
    }
  }

  async disconnect() {
    this.chatApi?.provider?.disconnect();
    this.eventemitter.removeAllListeners();
  }
  subscribeMessage(cb: (message: ChatMessage) => void){
    this.eventemitter.addListener('onMessage', cb)
  }
  onError = async () => {
    console.log('backend error');
  };
  onClose = async () => {
    console.log('backend close');
  };
}
