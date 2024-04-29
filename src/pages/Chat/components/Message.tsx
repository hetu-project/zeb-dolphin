import { useAppDispatch } from '@/redux/hooks';
import { useAccount, useActiveContact, useActiveNetwork, useMessagesList } from '@/redux/hooks/accounts';
import { MessageItem, accountActions } from '@/redux/store/account/accountSlice';
import { useCallback, useEffect, useRef, useState } from 'react'
import { PaperAirplaneIcon, TicketIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { messageStorageSortKey } from '@/utils/account';
import ChatApi from '@/client/chat/ChatApi';
import { ZMessage } from '@/proto/zmessage';
import { ChatMessage } from '@/proto/ChatMessage';
import { stringToU8a, u8aToString } from '@/utils';

export interface MessageCardProps {
  position: 'left' | 'right';
  message: string;
}

export function MessageCard({ position = 'left', message }: MessageCardProps) {
  return     <div
  className={clsx('flex items-center rounded-xl relative', {
    'justify-end': position !== 'left',
  })}>
  <div
    className={clsx(' mx-2 my-2 px-2 py-2 bg-[#DADCE0] rounded-full', {
      'order-1': position === 'left',
      'order-2': position !== 'left',
    })}>
    <TicketIcon className="w-10 h-10 text-[#9AA0A6]" />
  </div>
  <div
    className={clsx('py-4 overflow-hidden relative bg-gray-600 text-white rounded-3xl px-4 ', {
      'order-1': position !== 'left',
      'order-2': position === 'left',
    })}
  >
    <div>{message}</div>
  </div>
</div>
}


export interface MessageListProps {
  list?: MessageItem[];
}

export default function MessageList({ list = [] }: MessageListProps) {
  const activeAccount = useAccount();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (list.length && containerRef.current) {
      const height = containerRef.current.scrollHeight;
      containerRef.current.scroll({
        top: height,
        // behavior: 'smooth',
      });
    }
  }, [list.length]);
  return (
    <div className="overflow-scroll max-h-full" ref={containerRef}>
      <div className="flex flex-col gap-3 py-4 justify-end">
        {list.map((item, index) => {
          return (
            <MessageCard
              key={index}
              position={ (activeAccount?.address !== item?.from) ? 'left' : 'right'}
              message={item?.message}
            />
          );
        })}
      </div>
    </div>
  );
}


interface Inputs {
  message: string;
  name: string;
  agent: string;
  address: string;
}

export function Message() {
  const {register, getValues, setValue } = useForm<Inputs>();

  const [chatApi, setChatApi] = useState<ChatApi>();
  const network = useActiveNetwork();

  useEffect(() => {
    if(network) {
      const chatApi = ChatApi.create({
        url: [network.ws]
      })
      setChatApi(chatApi);
    }
    return () => {
    }

  }, [network]);

  const account = useAccount();
  const dispatch = useAppDispatch();
  const contact = useActiveContact();

  const messageList= useMessagesList(account?.address, contact?.address || '');
  const handleReceiveMessage = useCallback((message: ZMessage) => {
    const chatMessage = ChatMessage.decode(message.data);
    const from = u8aToString(chatMessage.from);
    const to = u8aToString(chatMessage.to);
    const key = messageStorageSortKey(from, to);

    const textMessage = u8aToString(chatMessage.data);
    const receiveMessage = {
      from,
      to: to,
      message: textMessage,
      sign: '',
    };
    dispatch(accountActions.addMessage({
      key,
      message: receiveMessage
    }));
  }, [dispatch]);

  useEffect(() => {
    if(!chatApi) {
      return
    }
    chatApi.isReady.then(() => {
      chatApi.subscribeReceiveMessage(handleReceiveMessage)
    })

    return () => {
      chatApi.isReady.then(() => {
        chatApi.unsubscribeReceiveMessage(handleReceiveMessage);
      })
    }

  }, [chatApi, handleReceiveMessage]);

  const handleSend = useCallback(async () => {
    console.log('handleSend');

    const message = getValues('message');
    if (!message) return;
    if (!account) return;
    if (!contact) return;
    if (!contact?.agent) return;
    setValue('message', '');
    const mf = {
      from: account.address,
      to: contact.address,
      message,
      sign: '',
    };
    // const signature = await signChatMessage(account, mf.message);
    chatApi?.sendMessage(mf.from, mf.to, mf.message, network?.agent || mf.to, stringToU8a(''))
    dispatch(accountActions.addMessage({
      key: '',
      message: mf
    }))
  }, [account, chatApi, contact, dispatch, getValues, network?.agent, setValue]);
  const handleKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter') {
        handleSend();
      }
    },
    [handleSend],
  );
  return (
    <div className='w-full h-full border-gray-500 flex flex-col items-center justify-center'>
      <div className=' flex-grow overflow-hidden flex flex-col justify-end w-full'>
        <MessageList list={messageList}/>
      </div>
      <div className='flex items-center w-full mb-2 px-2 gap-2'>
        <input 
          {...register('message')}
          className='input input-primary flex-grow' 
          placeholder="Message......"
          onKeyUp={handleKeyUp}
        />
        <button className='btn' onClick={handleSend}>
          <PaperAirplaneIcon  className='h-4 w-4'/>
        </button>
      </div>
    </div>
  )
}