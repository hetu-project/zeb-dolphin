import GraphMap from "./sections/GraphMap";
import NodeList from "../../http/NodeList"


function Home() {
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
          <a role="tab" className="tab  tab-active">Base chain</a>
          <a role="tab" className="tab">Ai chain</a>
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
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
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
          {/* <MessageGraph></MessageGraph> */}
          <GraphMap></GraphMap>
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
          <NodeList />
        </div>
      </div>
    </div>
  )
}

export default Home
