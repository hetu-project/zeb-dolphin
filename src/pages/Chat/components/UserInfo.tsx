import { useAppDispatch } from '@/redux/hooks';
import { useAccount } from '@/redux/hooks/accounts';
import { removeAccount } from '@/redux/store/account/accountSlice';
import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export function UserInfo() {
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

    const handleLogout = useCallback(() => {
    dispatch(removeAccount(account?.address))
  }, [account?.address, dispatch]);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex items-center'>
        <div>{account?.name}</div>
        <button className='btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}