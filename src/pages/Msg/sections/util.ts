// import protobuf from "protobufjs"
import { ZMessage, ZChat } from '@/proto/zmessage';
import { ChatMessage } from '@/proto/ChatMessage';

export function rawdata_decode(bufferdata: []) {
  if (bufferdata.length <= 0) return ''
  let data = Buffer.from(bufferdata)
  let zMessage = ZMessage.decode(data)
  let zChat = ZChat.decode(zMessage.data)
  // let res = zChat.messageData.toString('utf8')
  // let chatMessage= ChatMessage.decode(zMessage.data)
  // console.log(chatMessage)
  return zChat.messageData
}

export function json_decode(jsonStrings: []) {
  const objects = jsonStrings.map(jsonString => {
    const obj = JSON.parse(jsonString);
    obj.Clock = JSON.parse(obj.Clock);
    return obj;
  });

  return objects
}