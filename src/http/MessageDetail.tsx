import { useEffect, useState } from 'react';

const useMessageDetail = (msg_id: string | undefined) => {
  const [msgDetail, setMsgDetail] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (msg_id) {
      setIsLoading(true);
      const fetchNodeList = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_URL}message/${msg_id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setMsgDetail(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNodeList();
    }
  }, [msg_id]);

  return { msgDetail, isLoading };
};

export default useMessageDetail;
