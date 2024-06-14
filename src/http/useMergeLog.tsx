import { useEffect, useState } from 'react';

const useMergeLog = (msg_id: string | undefined) => {
  const [mergelogs, setMergelogs] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (msg_id) {
      setIsLoading(true);
      const fetchNodeList = async () => {
        try {
          const response = await fetch(`/gateway/merge_log_by_message_id/${msg_id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setMergelogs(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNodeList();
    }
  }, [msg_id]);

  return { mergelogs, isLoading };
};

export default useMergeLog;
