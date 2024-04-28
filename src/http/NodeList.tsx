import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const NodeList = () => {
  const [nodeList, setNodeList] = useState<any>(null);

  useEffect(() => {
    const fetchNodeList = async () => {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setNodeList(jsonData?.nodelist);
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
            <th>Node Id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {nodeList?.nodes?.map((item: any, index: any) => (
            <tr>
              <th>{index}</th>
              <td><Link to="/node">{item.node_id}</Link></td>
              <td>{item.is_alive ? "live":"pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NodeList;
