import React from 'react'

const cartItemCards = (props) => {
  const manipulableInventory = props.inventory.map(element => element);
  const itemCards = () => manipulableInventory.map(element => {
    if (element.numberInCart > 0) {
      return (
      <div className = 'hover:border-2 hover:border-indigo-400 border-2 col-start-3 col-span-3 justify-center shadow-lg shadow-indigo-400 py-2 w-3/4 font-semibold gap-2 rounded-lg'>
      <div className='flex justify-center'><img className='rounded h-1/2 w-2/3' src={element.imgSrc} alt='product'></img></div>
      <div className ='flex justify-center'>{element.name}</div>
      <div className='flex justify-center'>${element.price}</div>
      <div className='flex justify-center'>{element.numberInCart}</div>
      <div className='flex justify-center'>
        <button id={element.id} onClick={(event) => props.removeFromCart(event.target.id)}>x</button>
        <button id={element.id} onClick={(event) => props.addToCart(event.target.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/></svg></button>
      </div>
    </div>
    )
  }
  })
}

export default cartItemCards