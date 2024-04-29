import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../';
import { messageStorageSortKey } from '@/utils/account';

export interface Account {
  address: string;
  publicKey: string;
  privateKey: string;
  name: string;
  seeds: string
}


export interface MessageItem {
  from: string;
  to: string;
  message: string;
  sign: string;
}

export interface Contact {
  address: string;
  agent: string;
  name: string;
}

export interface Network {
  ws: string;
  agent: string;
  name: string;
}

interface AccountsState {
  accounts?: Record<string, Account>,
  contacts?:  Record<string, Contact>,
  networks?:  Record<string, Network>,
  messages?:  Record<string, MessageItem[]>,
  activeContact?: Contact,
  activeNetwork?: Network,
}

// Define the initial state using that type
const initialState: AccountsState = {
  accounts: {},
  contacts: {},
  networks: {},
}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      if(!state.accounts) {
        state.accounts = {};
      }
      if(!state.accounts[action.payload.address]){
        state.accounts[action.payload.address] = action.payload;
      }
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      if(state.accounts?.[action.payload]){
        delete state.accounts[action.payload];
      }
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      if(!state.contacts) {
        state.contacts = {};
      }
      const key = `${action.payload.agent}_${action.payload.address}`
      if(!state.contacts[key]){
        state.contacts[key] = action.payload;
      }
    },
    removeContact: (state, action: PayloadAction<Contact>) => {
      const key = `${action.payload.agent}_${action.payload.address}`
      if(state.contacts?.[key]){
        delete state.contacts[key];
      }
    },

    addNetwork: (state, action: PayloadAction<Network>) => {
      if(!state.networks) {
        state.networks = {};
      }
      if(!state.networks[action.payload.name]){
        state.networks[action.payload.name] = action.payload;
      }
    },
    removeNetwork: (state, action: PayloadAction<Network>) => {
      if(state.networks?.[action.payload.name]){
        delete state.networks[action.payload.name];
      }
    },

    activeNetwork: (state, action: PayloadAction<Network>) => {
      state.activeNetwork = action.payload;
    },
    inactiveNetwork: (state) => {
      state.activeNetwork = undefined;
    },


    activeContact: (state, action: PayloadAction<Contact>) => {
      state.activeContact = action.payload;
    },
    inactiveContact: (state) => {
      state.activeContact = undefined;
    },

    addMessage: (state, action: PayloadAction<{key: string, message: MessageItem}>) => {
      if(!state.messages) {
        state.messages = {}
      }
      const sortKey = messageStorageSortKey(action.payload.message.from, action.payload.message.to);
      if(!state.messages[sortKey]) {
        state.messages[sortKey] = []
      }
      state.messages[sortKey].push(action.payload.message);
    
    },
    clearMessage: (state, action: PayloadAction<string>) => {
      const sortKey = action.payload

      if(state.messages?.[sortKey]) {
        delete state.messages[sortKey];
      }
    },

  }
})

export const { addAccount, removeAccount } = accountsSlice.actions
export const accountActions = accountsSlice.actions;

export const selectAccounts = (state: RootState) => state.accounts.accounts;
export const selectContacts = (state: RootState) => state.accounts.contacts;
export const selectNetworks = (state: RootState) => state.accounts.networks;
export const selectMessages = (state: RootState) => state.accounts.messages;


export const selectActiveContact = (state: RootState) => state.accounts.activeContact;
export const selectActiveNetwork = (state: RootState) => state.accounts.activeNetwork;


export default accountsSlice.reducer