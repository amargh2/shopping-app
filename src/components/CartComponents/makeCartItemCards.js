import React from 'react'
import { TrashIcon } from '@heroicons/react/solid'
import { ArrowUpIcon } from '@heroicons/react/solid'
import {ArrowDownIcon} from '@heroicons/react/solid'
const MakeCartItemCardsForCart = (props) => {
  const manipulableInventory = props.inventory.map(element=>element)
  let itemCards =[]
  manipulableInventory.map(element => {
  if (element.numberInCart > 0) {
    itemCards.push(<div className = 'hover:border-2 hover:border-indigo-400 border-2 col-start-3 col-span-3 justify-center shadow-lg shadow-indigo-400 px-5 py-2 w-3/4 font-semibold gap-2 rounded-lg'>
    <div className='flex justify-center'><img className='rounded h-1/2 w-2/3' src={element.imgSrc} alt='product'></img></div>
    <div className ='flex justify-center'>{element.name}</div>
    <div className='flex justify-center'>${element.price}</div>
    <div className='flex justify-center'>{element.numberInCart}</div>
    <div className='flex justify-center'>
      <button id={element.id} onClick={(event) => props.removeFromCart(element.id)}><ArrowDownIcon className='h-6'/></button>
      <button id={element.id} onClick={(event) => props.addToCart(element.id)}><ArrowUpIcon className='h-6'/></button>
      <button id={element.id} onClick={(event) => props.removeAllOfSame(element.id)}><TrashIcon className='h-6'/></button>
    </div>
  </div>)
  }
})
  return (<div className='flex flex-col justify-center gap-2'>{itemCards}</div>)
}

export default MakeCartItemCardsForCart