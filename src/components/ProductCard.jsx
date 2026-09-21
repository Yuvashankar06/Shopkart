import React from 'react'


const ProductCard = ({title,price,image}) => {
  return (
    <>
    <div className='product-card'>
      <div className='product-image'>
        <img src={image} alt="Image Product" />
      </div>
      <h3>{title}</h3>
      <p className='product-price'>₹{Number(price).toFixed(2)}</p>
    </div>

    </>
  )
}

export default React.memo(ProductCard);