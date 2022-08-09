import React from 'react';
import SelectQuantity from './QuantitySelector';

const ProductDisplay = (props) => {
  const products2 = props.products
  const listTheProducts = () => {
    const processedItems = products2.map(product => {
      return (
        <div key={product.id} className = 'justify-center align-middle hover:ring-2 hover:ring-indigo-400 shadow-lg shadow-indigo-400 py-2 font-semibold gap-2 rounded-lg'>
          <div className='flex justify-center'><img className='rounded h-40 w-52 object-contain' src={product.imgSrc} alt='product'></img></div>
          <div className ='flex justify-center'>{product.name}</div>
          <div className='flex justify-center'>${product.price}</div>
          <div className='flex justify-center gap-2'>
            <div><SelectQuantity id={product.id} qtyHandler={props.qtyHandler}/></div>
            <div>
              <button
                className='flex justify-center px-2 py-3 text-white font-semibold hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400 text-xs'
                id = {product.id}
                onClick={(event)=> {props.clickHandler(event.target.id)}}>
                  Add to Cart
              </button>
            </div>
          </div>
        </div>
      )
    })
    return processedItems
  }

  return (
      <div className = 'grid lg:grid-cols-4 grid-cols-2 gap-4 pt-2 pb-10'>
        {listTheProducts(products2)}
      </div>
  )
}


export default ProductDisplay