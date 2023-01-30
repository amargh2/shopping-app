import React from "react";

const SortOptions = (props) => {
  return (
    <div className='py-2 flex flex-col'>
      <div className='absolute bg-slate-50 inset-x-0 flex-col gap-2 align-items-center py-4 px-2 md:flex md:relative'>
        <div class="flex justify-center"><button onClick={()=>props.sort('alphabetical a-z')} className='px-5 text-white shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical, A-Z</button></div>
        <div class="flex pt-2 justify-center"><button onClick={()=>props.sort('alphabetical z-a')} className='px-5 text-white shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical, Z-A</button></div>
        <div class="flex pt-2 justify-center"><button onClick={()=>props.sort('low-to-high')} className='px-5 text-white py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, Low-High</button></div>
        <div class="flex pt-2 justify-center"><button onClick={()=>props.sort('high-to-low')} className='text-white px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, High-Low</button></div>
      </div>
    </div>
  )
}



export default SortOptions