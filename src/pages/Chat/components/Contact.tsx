import { useAppDispatch } from '@/redux/hooks';
import { useAccount, useActiveContact, useContacts } from '@/redux/hooks/accounts';
import { accountActions } from '@/redux/store/account/accountSlice';
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PlusIcon, EllipsisHorizontalIcon, NoSymbolIcon, ArchiveBoxXMarkIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, TabList, Tabs, Tab, TabPanels, TabPanel, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { messageStorageSortKey } from '@/utils/account';

interface Inputs {
  name: string;
  agent: string;
  address: string;
}

export function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectDis = useDisclosure()

  const { register, getValues, reset } = useForm<Inputs>();

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

    dispatch(accountActions.addContact({
      name,
      agent,
      address,
    }))
    onClose();
    reset();
  }, [dispatch, getValues, onClose, reset]);
  const contacts = useContacts();
  const contact = useActiveContact();

  const messageSortKey = messageStorageSortKey(account?.address, contact?.address || '')

  const handleClearMessage = useCallback(() => {
    dispatch(accountActions.clearMessage(messageSortKey))
  }, [dispatch, messageSortKey])
  return (
    <div className='w-full flex items-center justify-between my-2 px-2'>
      <div className='flex items-center '>
        <div className='mr-4'>Contact:</div>
        <div>{contact?.name}</div>
      </div>
      <div className='flex items-center'>
        <button className='btn' onClick={onOpen}>
          <PlusIcon  className='h-4 w-4'/>
        </button>
        <button className='btn ml-2' onClick={selectDis.onOpen}>
          <EllipsisHorizontalIcon  className='h-4 w-4'/>
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
            <div>Contact Manage</div>
          </ModalHeader>
          <ModalBody>
            <Tabs isFitted>
              <TabList>
                <Tab className=' cursor-pointer' as={'div'}>Switch Contact</Tab>
                <Tab className=' cursor-pointer' as={'div'}>Add Contact</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className='h-96 flex flex-col overflow-scroll gap-3'>
                  {contacts.map((c) => {
                    return <div 
                    className=' flex justify-between items-center'
                    key={`${c.agent}_${c.address}`}
                    onClick={() => {
                      // setContact(c);
                      dispatch(accountActions.activeContact(c))
                      onClose();
                    }}
                    >
                      <div>
                        {c.name}
                      </div>
                      <div className='flex items-center gap-1'>
                          <Button as={'div'}>
                            <div className='btn'
                              onClick={() => {
                              dispatch(accountActions.activeContact(c))
                              onClose();
                            }}
                            >
                              <ArrowPathIcon  className='h-4 w-4'/>
                            </div>
                          </Button>
                          <Button as={'div'}>
                            <div className='btn'
                              onClick={() => {
                              dispatch(accountActions.removeContact(c))
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
                          Address:
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
                        Add Contact
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>


      <Modal isOpen={selectDis.isOpen} onClose={selectDis.onClose} isCentered>
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
            <div>More Action</div>
          </ModalHeader>
          <ModalBody>
            <div className='flex min-h-40'>
                <Button as={'div'} className='btn' onClick={handleClearMessage}>
                  <NoSymbolIcon  className='h-4 w-4'/>
                </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}