// import NodeList from "./sections/NodeList";
import { rawdata_decode, json_decode } from "./sections/util";
import { useParams } from "react-router-dom";
import useMessageDetail from '../../http/MessageDetail';
import useMergeLog from '../../http/useMergeLog';
import { useEffect, useState } from "react";


export default function Msg() {
  const { msg_id } = useParams();
  const { msgDetail } = useMessageDetail(msg_id);
  const { mergelogs } = useMergeLog(msg_id);
  const [messageData, setMessageData] = useState<any>(null);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!msgDetail) return
    const sss = rawdata_decode(msgDetail?.message_data)
    console.log(sss)
    setMessageData(sss)
  }, [msgDetail]);

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-5xl w-full flex flex-col'>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Msg Content
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-between border-2 m-2 h-50 overflow-x-auto'>
          message_id: {msgDetail?.message_id}<br />
          from_addr: {msgDetail?.from_addr}<br />
          event_count: {msgDetail?.event_count}<br />
          message_data: {messageData}<br />
          message_type: {msgDetail?.message_type}<br />
          to_addr: {msgDetail?.to_addr}<br />
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              </span>
              Clock
            </li>
          </ul>
        </div>
        {/* <MessageGraph></MessageGraph> */}
        <div className='flex items-center justify-center border-2 m-2 rounded-md mb-10'>
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Node Id</th>
                  <th>ClockHash</th>
                  <th>Clock</th>
                </tr>
              </thead>
              <tbody>
                {msgDetail?.clock_json_str_list && json_decode(msgDetail?.clock_json_str_list).map((item: any, index: any) => (
                  <tr key={index}>
                    <th>{index}</th>
                    <td>{item.NodeId}</td>
                    <td>{item.ClockHash}</td>
                    <td>{JSON.stringify(item.Clock)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Merge Log
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-between border-2 m-2 h-40 rounded-md overflow-x-auto'>
          {JSON.stringify(mergelogs)}
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Node List
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 m-2 rounded-md mb-10'>
          {/* <NodeList}></NodeList> */}
        </div>
      </div>
    </div>
  )
}
