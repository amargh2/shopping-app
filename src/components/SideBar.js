import React, { useEffect } from "react";

const SideBar = () => {
  const menuButton = (<button className='px-5 py-2 hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400'>+</button>)
  const menu = (<></>)

  return (
    <div>
      
      <div className='flex flex-col align-items-center'>
        <button>sorting</button>
        <button>sorting</button>
        <button>sorting</button>
        <button>sorting</button>
        {menuButton}
      </div>
    </div>
  )
}

export default SideBar