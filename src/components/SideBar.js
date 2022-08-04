import React, { useEffect } from "react";

const SideBar = (props) => {
  return (
    <div>
      
      <div className='flex flex-col gap-2 align-items-center py-4 px-2'>
        <button className='px-5 shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical</button>
        <button onClick={()=>props.sortItemsByPrice('low-to-high')} className='px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, Low-High</button>
        <button onClick={()=>props.sortItemsByPrice('high-to-low')} className='px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, High-Low</button>
      </div>
    </div>
  )
}

export default SideBar