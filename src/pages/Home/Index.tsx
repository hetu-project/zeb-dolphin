import Stat from "./sections/Stat";
import NodeList from "./sections/NodeList";
import MessageGraph from "./sections/MessageGraph";

function Home() {
  return (
    <div className=' w-full flex items-center justify-center'>

      <div className=' max-w-4xl flex-grow'>
        <div className="text-sm breadcrumb mt-10">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Multi chain select
              </span>
            </li>
          </ul>
        </div>
        <div role="tablist" className="tabs tabs-boxed mb-10">
          <a role="tab" className="tab  tab-active">Base chain</a>
          <a role="tab" className="tab">Ai chain</a>
          <a role="tab" className="tab">....</a>
          <a role="tab" className="tab">Other chain</a>
        </div>
        <div className="text-sm breadcrumb mt-10">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Index stat
              </span>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 items-center justify-between'>
          <Stat></Stat>
          <Stat></Stat>
          <Stat></Stat>
          <Stat></Stat>
        </div>

        <div className="text-sm breadcrumb mt-10">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Map
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 rounded-md mb-10'>
          <MessageGraph></MessageGraph>
        </div>

        <div className="text-sm breadcrumb mt-10">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Node list
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 rounded-md mb-20'>
          <NodeList></NodeList>
        </div>
      </div>
    </div>

  )
}

export default Home