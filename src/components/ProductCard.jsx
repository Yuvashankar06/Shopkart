import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';


const ProductCard = ({id,title,price,image}) => {

  const {dispatch}=useContext(CartContext);


  return (
    <>
    <div className='product-card'>
      <div className='product-image'>
        <img src={image} alt="Image Product" />
      </div>
      <h3>{title}</h3>
      <p className='product-price'>₹{Number(price).toFixed(2)}</p>
      <button
      className="product-btn" onClick={()=>dispatch({
        type:"ADD_TO_CART",
        payload:{id,title,price,image}
      })}>ADD TO CART</button>
    </div>

    </>
  )
}

export default React.memo(ProductCard);