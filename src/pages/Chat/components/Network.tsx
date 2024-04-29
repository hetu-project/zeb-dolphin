import { useAppDispatch } from '@/redux/hooks';
import { useAccount, useActiveNetwork, useNetworks } from '@/redux/hooks/accounts';
import { accountActions } from '@/redux/store/account/accountSlice';
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArchiveBoxXMarkIcon, ArrowPathIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Tabs, TabList, Tab, TabPanels, TabPanel, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

interface Inputs {
  name: string;
  agent: string;
  address: string;
}

export function Network() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {register, getValues, reset } = useForm<Inputs>();

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
  const dispatch = useAppDispatch();
  const handleAddContact = useCallback(() => {
    const name = getValues('name');
    const agent = getValues('agent');
    const address = getValues('address');

    dispatch(accountActions.addNetwork({
      name,
      agent,
      ws: address,
    }))
    onClose();
    reset();
  }, [dispatch, getValues, onClose, reset]);
  const contacts = useNetworks();
  const contact = useActiveNetwork();
  return (
    <div className='w-full flex  items-center justify-between px-2 my-2'>
      <div className='flex items-center'>
        <div className='mr-4'>Network:</div>
        <div>{contact?.name}</div>  
      </div>
      <div className='flex items-center'>
        <button className='btn' onClick={onOpen}>
          <Cog6ToothIcon  className='h-4 w-4'/>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          containerProps={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ModalCloseButton as={'div'} className='btn btn-ghost' />
          <ModalHeader>
            <div>Network Manage</div>
          </ModalHeader>
          <ModalBody>
            <Tabs isFitted>
              <TabList className=''>
                <Tab className=' cursor-pointer' as={'div'}>Switch Network</Tab>
                <Tab className=' cursor-pointer' as={'div'}>Add Network</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className=' h-96 flex flex-col overflow-scroll gap-3'>
                    {contacts.map((c) => {
                      return <div 
                      className=' flex justify-between items-center'
                      key={`${c.agent}_${c.name}`}
                      >
                        <div>
                          {c.name}
                        </div>
                        <div className='flex items-center gap-1'>
                          <Button as={'div'}>
                            <div className='btn'
                              onClick={() => {
                              dispatch(accountActions.activeNetwork(c))
                              onClose();
                            }}
                            >
                              <ArrowPathIcon  className='h-4 w-4'/>
                            </div>
                          </Button>
                          <Button as={'div'}>
                            <div className='btn'
                              onClick={() => {
                              dispatch(accountActions.removeNetwork(c))
                              onClose();
                            }}
                            >
                              <ArchiveBoxXMarkIcon  className='h-4 w-4'/>
                            </div>
                          </Button>
                        </div>
                      </div>
                    })}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='h-96'>
                    <div className=''>
                      <div className=''>
                        <div className='mb-2'>
                          Name:
                        </div>
                        <input
                          placeholder=""
                          className="input input-primary w-full resize-none"
                          {...register('name')}></input>
                      </div>
                      <div className='mt-4'>
                        <div className='mb-2'>
                          Agent:
                        </div>
                        <input
                          placeholder=""
                          className="input input-primary w-full resize-none"
                          {...register('agent')}></input>
                      </div>
                      <div className='mt-4'>
                        <div className='mb-2'>
                          Url:
                        </div>
                        <input
                          placeholder=""
                          className="input input-primary w-full resize-none"
                          {...register('address')}></input>
                      </div>
                    </div>
                    <div className='flex items-center justify-center my-6'>
                      <button className='btn'
                        onClick={handleAddContact}
                      >
                        Add Network
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}