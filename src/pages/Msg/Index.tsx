// import NodeList from "./sections/NodeList";
import MessageGraph from "./sections/MessageGraph";
import { useParams } from "react-router-dom";
// import MessageDetail from "../../http/MessageDetail";
import useMessageDetail from '../../http/MessageDetail';


export default function Msg() {

  const { msg_id } = useParams();

  const { msgDetail, isLoading } = useMessageDetail(msg_id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <div className='flex items-center justify-between border-2 m-2 h-20 rounded-md'>
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              </span>
              VLC Map
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-between border-2 m-2 rounded-md'>
          <MessageGraph></MessageGraph>
        </div>

        <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Merge Log & Clock Info
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-between border-2 m-2 h-40 rounded-md'>

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
