import { useAccount } from '@/redux/hooks/accounts';
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Network } from './components/Network';
import { Message } from './components/Message';

export function Chat() {
  const account = useAccount();
  const navigate = useNavigate();

  const handleGoToChat = useCallback(() => {
    navigate('/login')
  }, [navigate]);
  useEffect(() => {
    if(!account) {
      handleGoToChat();
    }

  }, [account, handleGoToChat]);
  return (
    <div className='w-full flex flex-col items-center justify-center h-[80vh] md:my-4'>
      <div className=' h-full flex flex-col w-full items-center'>
        {/* <div>
          <Network />
          <Contact />
        </div> */}
        <div className=' flex-grow w-full h-full shadow flex flex-col items-center justify-center md:w-96'>
          <div className=' shadow-sm w-full flex-shrink-0'>
            <Network />
            <Contact />
          </div>
          <div className=' flex-grow overflow-hidden w-full'>
            <Message />
          </div>
        </div>
      </div>
    </div>
  )
}