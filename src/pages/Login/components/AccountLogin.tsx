import { useAppDispatch } from '@/redux/hooks'
import { addAccount } from '@/redux/store/account/accountSlice';
import { useForm, useWatch } from 'react-hook-form';
import { useCallback, useMemo } from 'react';
import * as bip39 from 'bip39';
import { etc } from '@noble/ed25519';
import { Mnemonic } from '@/crypto/mnemonic';
import { useAccount } from '@/redux/hooks/accounts';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
interface Inputs {
  name: string;
  seeds: string;
}

export function AccountLogin() {
  const { control, register, getValues, setValue, reset } = useForm<Inputs>();
  const account = useAccount();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const handleAddAccount = useCallback(() => {
    const mnemonic = getValues('seeds');
    const accountName = getValues('name');
    const isValidate = bip39.validateMnemonic(mnemonic);
    if (!isValidate) {
      return;
    }
    const hdKey = Mnemonic.generateEd25519FromMnemonic(mnemonic);
    const address = etc.bytesToHex(hdKey.publicKeyRaw);
    dispatch(addAccount({
      seeds: mnemonic,
      name: accountName,
      address: address,
      publicKey: etc.bytesToHex(hdKey.publicKeyRaw),
      privateKey: etc.bytesToHex(hdKey.privateKey),
    }));
    reset();
  }, [dispatch, getValues, reset]);

  const handleGenerate = useCallback(() => {
    const mnemonic = bip39.generateMnemonic();
    setValue('seeds', mnemonic);
  }, [setValue]);

  const seeds = useWatch({
    control,
    name: 'seeds',
    defaultValue: '',
  });

  const isValidateSeeds = useMemo(() => {
    if(!seeds) return false;
    return bip39.validateMnemonic(seeds);
  }, [seeds]);

  // const handleLogout = useCallback(() => {
  //   dispatch(removeAccount(account?.address))
  // }, [account?.address, dispatch]);

  // const handleGoToChat = useCallback(() => {
  //   navigate('/chat')
  // }, [navigate]);

  if(account) return <div className=' py-4 flex flex-col items-center gap-4'>
    <div>
      {`Hello!  ${account.name}`}
    </div>
    {/* <div>
      <button className='btn btn-primary' onClick={handleGoToChat}>Go To Chat</button>
    </div> */}
    <div>
      {/* <button className='btn btn-link' onClick={handleLogout}>Logout</button> */}
      <Link to={'/chat'}>Go To Chat</Link>
    </div>
  </div>

  return (
    <div className=' my-10 flex flex-col w-full  sm:w-80'>
      <div className="w-full flex flex-col px-4 py-2">
        <div className='my-2'>Name:</div>
        <input
          placeholder="Account name"
          className="input input-primary flex-grow resize-none"
          {...register('name')}></input>
      </div>
      <div className="w-full flex flex-col px-4 py-2">
        <div className='my-2 flex justify-between items-center'>
          <div>
            Mnemonic:
          </div>
          <button className='btn btn-sm flex items-center justify-center'
            onClick={handleGenerate}
          >
            Generate Account
          </button> 
          </div>
        <textarea
          rows={4}
          placeholder="Generate or import an account"
          className="textarea textarea-primary flex-grow resize-none"
          {...register('seeds')}></textarea>
      </div>
      <button disabled={!isValidateSeeds} className='btn mt-4 mx-2'
        onClick={handleAddAccount}
      >
        Login
      </button>
    </div>
  )
}