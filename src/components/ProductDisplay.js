import React from 'react';
import App from '../App';

const ProductDisplay = (props) => {
  const products2 = props.products
  const listTheProducts = () => {
    const processedItems = products2.map(product => {
      return (
      <div className='border-2 hover:border-2 hover:border-yellow-200 shadow-lg rounded-lg flex shadow-indigo-400 justify-center py-2'>
        <div className = 'flex-col px-2 py-2 font-semibold gap-2 rounded-lg'>
          <div>
            <img className='rounded' src={product.imgSrc}></img>
          </div>
          <div className='flex-col justify-center'>
            <div className='flex justify-center'>{product.name}</div>
            <div className='flex justify-center'>${product.price}</div>
            <div className ='flex justify-center'>
              <button
                className='flex px-5 py-2 text-white font-semibold hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400 text-xs'
                id = {product.id}
                onClick={(event)=> {props.clickHandler(props.products , event.target.id)}}>
                  Add to Cart
              </button>
          </div>
          </div>
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