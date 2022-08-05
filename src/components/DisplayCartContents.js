import React from 'react';

const cartDisplay = (props) => {
  const manipulableInventory = props.inventory.map(element => element);
  const itemCards = () => manipulableInventory.map(element => {
    if (element.numberInCart > 0) {
      return (<div className = 'hover:border-2 hover:border-indigo-400 border-2 col-start-3 col-span-3 justify-center shadow-lg shadow-indigo-400 py-2 w-3/4 font-semibold gap-2 rounded-lg'>
      <div className='flex justify-center'><img className='rounded h-1/2 w-2/3' src={element.imgSrc} alt='product'></img></div>
      <div className ='flex justify-center'>{element.name}</div>
      <div className='flex justify-center'>${element.price}</div>
      <div className='flex justify-center'>{element.numberInCart}</div>
      <div className='flex justify-center'>
        <button id={element.id} onClick={(event) => props.removeFromCart(event.target.id)}>x</button>
        <button id={element.id} onClick={(event) => props.addToCart(event.target.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/></svg></button>
      </div>
    </div>)
    }
  })
  const totalDisplay = (   
    <div className='col-start-6 rounded-lg shadow-sm shadow-indigo-400 sticky top-0 row-start-1 row-span-full border-2 col-span-3 text-xl flex justify-center font-semibold flex-col'>
      <ul className='flex-col justify-center'>
      {props.inventory.map(item => {
        if (item.numberInCart > 0) {
          return (<li className='flex justify-center'>{item.name}, ${item.price} x {item.numberInCart}</li>)
        }
      })
      }
      </ul>
      <div className='flex justify-center'>
        <p>Current Total: {props.total}</p>
      </div>
      <div className = 'flex justify-center gap-2'>
        <button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Checkout</button> 
        <Link to='/shop'><button className='ring-2 ring-cyan-200 rounded-lg px-2'>Keep Shopping</button></Link></div>
      </div>)
    return (
      <div className='lg:grid lg:grid-cols-10 gap-2'>
        {itemCards()}
        {totalDisplay}
      </div>)
}

//checks the cart -- if empty, tells the user to go add items to their cart
  function chooseOutput() {
    let emptyOrFull
    if (props.total === 0) {
      emptyOrFull = (<div className = 'flex justify-center'>Your cart is currently empty! Visit the shop and add some items to your cart!</div>)
    } if (props.total !== 0) {
      emptyOrFull = cartDisplay()
      }  return (
      <div>{emptyOrFull}</div>
      )
  }

export default cartDisplay