// import protobuf from "protobufjs"
import { ZMessage, ZChat } from '@/proto/zmessage';

export function rawdata_decode(bufferdata: []) {
  if (bufferdata.length <=0) return ''
  let data = Buffer.from(bufferdata)
  let zMessage = ZMessage.decode(data)
  let zChat = ZChat.decode(zMessage.data)
  let res = zChat.messageData.toString('utf8')
  return res
}
