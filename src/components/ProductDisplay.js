import React from 'react';

const ProductDisplay = (props) => {
  const products = ['dummy string', 'dummy string2', 'dummy string3', 'dummy4', 'dummy5', 'dummy6']
  const products2 = props.products
  const listTheProducts = (products) => {
    const processedItems = products.map(product => {
      return (
      <div className='border-2 border-yellow-400 rounded-lg flex justify-center py-2'>
        <div className = 'flex-col font-semibold gap-2 shadow-lg rounded-lg'>
          <div>{product.name}</div>
          <div>${product.price}</div>
          <div>
            <button 
              className='flex px-5 py-2 text-white font-semibold hover:ring-2 hover:ring-yellow-400 rounded-lg bg-cyan-400 text-xs' 
              onClick={()=>console.log('added to cart inv will -1, cart will+1 item')}>
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
    <div className = 'lg:grid lg:grid-cols-4 md:flex-col sm:flex sm:flex-col'>
      {listTheProducts(products2)}
    </div>
  )
}


export default ProductDisplay