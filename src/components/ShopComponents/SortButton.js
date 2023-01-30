import React, { useState } from 'react';
import SortOptions from "./SortOptions";
import { SortDescendingIcon } from '@heroicons/react/solid';

const SortButton = (props) => {
  const [open, setOpen] = useState(true)
  return (
    <div className='py-2'>
      <div className='flex justify-center'>
        <button onClick={() => setOpen(open=>!open)} className='ring-2 ring-cyan-400 h-10 px-2 font-light rounded-lg'>
          <SortDescendingIcon className='h-8'/></button></div>
          {open && <SortOptions sort={props.sort}/>}  
    </div>
  )
}

export default SortButton