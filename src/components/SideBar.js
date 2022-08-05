import React from "react";

const SideBar = (props) => {
  return (
    <div className='py-2'>
      <div className='flex justify-center'><p className='bg-cyan-400 px-5 py-2 text-white rounded-lg'><svg classNAme='text-white' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.75 17.025V16.4h4.625v.625Zm0-5.325v-.65h10.575v.65Zm0-5.35V5.7h16.525v.65Z"/></svg></p></div>
      <div className='flex flex-col gap-2 align-items-center py-4 px-2'>
        <button className='px-5 text-white shadow-lg py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Alphabetical</button>
        <button onClick={()=>props.sortItemsByPrice('low-to-high')} className='px-5 text-white py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, Low-High</button>
        <button onClick={()=>props.sortItemsByPrice('high-to-low')} className='text-white px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>Price, High-Low</button>
      </div>
    </div>
  )
}

export default SideBar