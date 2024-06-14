// import NodeList from "./sections/NodeList";
import { rawdata_decode } from "./sections/util";
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
        <div className='flex items-center justify-between border-2 m-2 h-50'>
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
        <div className='flex items-center justify-between border-2 m-2 rounded-md'>
          {/* <MessageGraph></MessageGraph> */}
          {msgDetail?.clock_json_str_list}
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
        <div className='flex items-center justify-between border-2 m-2 h-40 rounded-md'>
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
