import React from 'react';

const ProductDisplay = (props) => {
  const products = ['dummy string', 'dummy string2', 'dummy string3']
  
  const listTheProducts = (products) => {
    const processedItems = products.map(product => {
      return (<div className='border-2 border-yellow-400'>
        <div className = 'flex justify-center flex-col gap-2 px-24 py-24 shadow-lg rounded-lg'>
          {product}
          <div>
          <button onClick={()=>console.log('added to cart inv will -1, cart will+1 item')}>Add to Cart</button>
        </div>
        </div>
      </div>)
    })
    return (<div>{processedItems}</div>)
  }

  return (
    <div className = 'lg:grid grid-flow-col lg:grid-cols-6 sm:flex md:grid-cols-2 gap-2'>
      {listTheProducts(products)}
    </div>
  )
}


export default ProductDisplay