import NodeList from "./sections/NodeList";

export default function Node() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-5xl w-full flex flex-col'>

      <div className="text-sm breadcrumb mt-6">
          <ul>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Node Content
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
                VLC State
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
                Merge Log
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
                Msg List
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-2 m-2 rounded-md mb-10'>
          <NodeList></NodeList>
        </div>
      </div>
    </div>
  )
}
