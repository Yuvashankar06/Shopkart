// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";


// function Cart() {
//   const navigate=useNavigate();
//   const {state, dispatch} = useContext(CartContext);
//   return (
//     <>
//       <div className="cart-container">
//         <h2>Your Cart</h2>
//         <div className="cart-items">
//           {state.cart.length === 0 ? (
//             <h2>Cart is empty</h2>
//           ) : (
//             state.cart.map((item) => (
//               <div key={item.id} className="cart-items">
//                 <img  src={item.image} alt={item.title} />
//                 <h3>{item.title}</h3>
//                 <p>{item.price}</p>
//                 <button
//                   onClick={() =>
//                     dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
//                   }
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))
//           )}
//           <button onClick={()=>navigate('/payment')}>Payment</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="cart-page">

      <div className="cart-container">

        <h2>Your Cart</h2>

        {state.cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Cart is empty</h2>

            <p>
              Add some products to your cart and they will appear here.
            </p>

            <button onClick={() => navigate("/products")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">

              {state.cart.map((item) => (
                <div key={item.id} className="cart-item">

                  <div className="cart-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="cart-details">

                    <h3>{item.title}</h3>

                    <p className="cart-price">
                      ₹{item.price}
                    </p>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Cart Summary */}

            <div className="cart-summary">

              <div className="summary-row">
                <span>Items</span>
                <span>{state.cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>

                <span>
                  ₹
                  {state.cart
                    .reduce(
                      (total, item) =>
                        total + Number(item.price),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>

                <span>
                  ₹
                  {state.cart
                    .reduce(
                      (total, item) =>
                        total + Number(item.price),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <button
                className="payment-btn"
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment
              </button>

              <button
                className="continue-btn"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default Cart;