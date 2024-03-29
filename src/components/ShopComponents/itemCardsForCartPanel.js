import React from 'react'
import { ArrowDownIcon } from '@heroicons/react/solid'
import { ArrowUpIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/solid'

const MakeCartItemCardsForCartPanel = (props) => {
  const manipulableInventory = props.inventory.map(element=>element)
  let itemCards =[]
  manipulableInventory.map(element => {
  if (element.numberInCart > 0) {
    itemCards.push(
      <div className = 'hover:border-2 hover:border-indigo-400 border-2 flex-col shadow-lg shadow-indigo-400 px-2 py-2 font-semibold gap-2 col-span-full rounded-lg'>
        <div className='flex justify-center'><img className='rounded h-40 w-40' src={element.imgSrc} alt='product'></img></div>
        <div className="flex flex-col justify-evenly">
          <div className ='flex justify-center'>{element.name} x {element.numberInCart}, ${element.price} each</div>
          <div className='flex gap-2 justify-center'>
            <button id={element.id}
            onClick={() => props.removeFromCart(element.id)}
            className='hover:bg-gray-300 rounded-lg'>
              <ArrowDownIcon className='h-4 hover:bg-slate-100'/>
            </button>
            <button id={element.id}
            onClick={() => props.addOne(element.id)}
            className='rounded-lg hover:bg-gray-300'>
              <ArrowUpIcon className='h-4'/>
            </button>
            <button id={element.id}
            onClick={() => props.removeAllOfSame(element.id)}
            className='rounded-lg hover:bg-gray-300'>
              <TrashIcon className='h-4'/>
            </button>
          </div>
        </div>
      </div>)
  }
})
  return (<div className='lg:px-10 gap-4'>{itemCards}</div>)
}

export default MakeCartItemCardsForCartPanel