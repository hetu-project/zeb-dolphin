import { useEffect, useState } from 'react';

const useNodeDetail = (node_id: string | undefined) => {
  const [nodeDetail, setNodeDetail] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (node_id) {
      setIsLoading(true);
      const fetchNodeDetail = async () => {
        try {
          const response = await fetch(`/gateway/node/${node_id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setNodeDetail(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNodeDetail();
    }
  }, [node_id]);

  return { nodeDetail, isLoading };
};

export default useNodeDetail;
