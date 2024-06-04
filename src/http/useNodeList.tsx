import { useEffect, useState } from 'react';

const useNodeList = () => {
  const [nodeList, setNodeList] = useState<any>(null);

  useEffect(() => {

    const fetchNodeList = async () => {
      try {
        const response = await fetch('/gateway/overview');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        // console.log(jsonData)
        setNodeList(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchNodeList();
  }, []);

  return { nodeList };
};

export default useNodeList;
