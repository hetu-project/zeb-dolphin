import P2PNetworkTopology from "./sections/NodeGraph";
import useNodeList from '../../http/useNodeList';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  const { nodeList } = useNodeList();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-5xl w-full flex flex-col'>
        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Multi chain select
              </span>
            </li>
          </ul>
        </div>
        <div role="tablist" className="tabs tabs-boxed ">
          <a role="tab" className="tab  tab-active">Hpoints</a>
          <a role="tab" className="tab">Aos</a>
          <a role="tab" className="tab">....</a>
          <a role="tab" className="tab">Other chain</a>
        </div>
        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Index stat
              </span>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 items-center justify-between border-2 m-2 rounded-md stats shadow'>
          <div className="stat place-items-center">
            <div className="stat-title">Total</div>
            <div className="stat-value">{nodeList?.total_node_count}</div>
            <div className="stat-desc">Nodes</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total</div>
            <div className="stat-value text-secondary">{nodeList?.total_message_count}</div>
            <div className="stat-desc text-secondary">Message ↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Map
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 m-2 rounded-md'>
          <P2PNetworkTopology nodeList={nodeList}></P2PNetworkTopology>
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Node list
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 m-2 rounded-md mb-10'>
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
                  <tr key={index}>
                    <th>{index}</th>
                    <td><Link to={`/node/${item.node_id}`}>{item.node_id}</Link></td>
                    <td>{item.is_alive ? "live" : "pending"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
