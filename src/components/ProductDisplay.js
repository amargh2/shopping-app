import React from 'react';
import App from '../App';

const ProductDisplay = (props) => {
  const products2 = props.products
  const listTheProducts = () => {
    const processedItems = products2.map(product => {
      return (
        <div className = 'justify-center align-middle hover:border-2 hover:border-indigo-400 shadow-lg shadow-indigo-400 py-2 font-semibold gap-2 rounded-lg'>
          <div className='flex justify-center'><img className='rounded w-2/3 h-1/2' src={product.imgSrc} alt='product'></img></div>
          <div className ='flex justify-center'>{product.name}</div>
          <div className='flex justify-center'>${product.price}</div>
          <div className='flex justify-center'>{product.numberInCart}</div>
          <div className='flex justify-center'>
            <button
                  className='flex justify-center place-self-bottom px-5 py-2 text-white font-semibold hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400 text-xs'
                  id = {product.id}
                  onClick={(event)=> {props.clickHandler(event.target.id)}}>
                    Add to Cart
                </button>
          </div>
        </div>
      )
    })
    return processedItems
  }

  return (
      <div className = 'lg:grid lg:grid-cols-4 md:flex-col sm:flex sm:flex-col gap-4'>
        {listTheProducts(products2)}
      </div>
  )
}


export default ProductDisplay