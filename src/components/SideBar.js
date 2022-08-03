import React, { useEffect } from "react";

const SideBar = () => {
  const menuButton = (<button className='px-5 py-2 bg-cyan-400'>+</button>)
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