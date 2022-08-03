import React from 'react';
import App from '../App';

const ProductDisplay = (props) => {
  const products2 = props.products
  console.log(products2)
  console.log(products2[0].id)
  const listTheProducts = (products2) => {
    const processedItems = products2.map(product => {
      return (
      <div className='border-2 border-yellow-400 rounded-lg flex justify-center py-2'>
        <div className = 'flex-col font-semibold gap-2 shadow-lg rounded-lg'>
          <div>{product.name}</div>
          <div>${product.price}</div>
          <div>
            <button 
              className='flex px-5 py-2 text-white font-semibold hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400 text-xs' 
              id = {product.id}
              onClick={(event)=> {props.clickHandler(props.products , event.target.id)}}>
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
      <div className = 'lg:grid lg:grid-cols-4 md:flex-col sm:flex sm:flex-col gap-4'>
        {listTheProducts(products2)}
      </div>
  )
}


export default ProductDisplay