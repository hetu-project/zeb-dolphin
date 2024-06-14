import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const NodeDetail = ({ node_id }: { node_id: string | undefined }) => {
  const [messageList, setMessageList] = useState<any>(null);

  useEffect(() => {
    const fetchNodeList = async () => {
      try {
        const response = await fetch(`/gateway/node/${node_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setMessageList(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNodeList();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Msg Id</th>
            <th>From</th>
            <th>to</th>
          </tr>
        </thead>
        <tbody>
          {messageList?.message_list?.map((item: any, index: any) => (
            <tr key={index}>
              <th>{index}</th>
              <td><Link to={`/message/${item.message_id}`}>{item.message_id}</Link></td>
              <td>{item.from_addr}</td>
              <td>{item.to_addr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NodeDetail;
