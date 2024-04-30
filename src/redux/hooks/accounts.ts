import { selectAccounts, selectActiveContact, selectActiveNetwork, selectContacts, selectMessages, selectNetworks } from "@/redux/store/account/accountSlice"
import { messageStorageSortKey } from "@/utils/account"
import { useMemo } from "react"
import { useSelector } from "react-redux"

export const useAccounts = () => {
  return useSelector(selectAccounts)
}

export const useContacts = () => {
  const contacts = useSelector(selectContacts)
  return useMemo(() => {
    return Object.values(contacts || {});
  }, [contacts]);
}

export const useActiveContact = () => {
  const contact = useSelector(selectActiveContact)
  return contact;
}

export const useAccount = () => {
  const accounts = useAccounts();
  return useMemo(() => {
    return Object.values(accounts || {})[0];
  }, [accounts])
}


export const useNetworks = () => {
  const networks = useSelector(selectNetworks)
  return useMemo(() => {
    return Object.values(networks || {});
  }, [networks]);
}

export const useActiveNetwork = () => {
  const network = useSelector(selectActiveNetwork)
  return network;
}

export const useMessagesList = (from: string, to: string) => {
  const messages = useSelector(selectMessages);
  return useMemo(() => {
    const sortKey = messageStorageSortKey(from, to);
    return messages?.[sortKey] || []
  }, [from, messages, to])
}