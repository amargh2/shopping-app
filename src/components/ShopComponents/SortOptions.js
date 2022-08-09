import React from "react";

const SortOptions = (props) => {
  return (
    <div className='flex flex-col gap-2 align-items-center py-4 px-2'>
      <button onClick={()=>props.sort('alphabetical a-z')} className='px-5 text-white shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical, A-Z</button>
      <button onClick={()=>props.sort('alphabetical z-a')} className='px-5 text-white shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical, Z-A</button>
      <button onClick={()=>props.sort('low-to-high')} className='px-5 text-white py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, Low-High</button>
      <button onClick={()=>props.sort('high-to-low')} className='text-white px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, High-Low</button>
    </div>
  )
}



export default SortOptions