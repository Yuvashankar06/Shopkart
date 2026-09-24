// import React, { useContext } from 'react'
// import { CartContext } from './../context/CartContext';
// import { useNavigate } from 'react-router-dom';

// function Payment() {
//     const Navigate=useNavigate();
//     const {state}=useContext(CartContext);
//     const total=(state.cart.reduce((acc,item)=>acc+item.price,0)).toFixed(2);

//     const handlePayment=()=>{
//         alert("Payment Successfull");
//         Navigate("/success");
//     }

//   return (
//     <>
//     <div className="payment-container">
//         <div className="payment-cart">
//             <h2>Payment</h2>
//             <p>Total Amount: ${total}</p>
//             <input type='number' placeholder='Card Number' />
//             <input type='text' placeholder='Card Holder Name' />
//             <input type='number' placeholder='CVV' />
//             <button onClick={handlePayment}>Check Out</button>
//         </div>
//     </div>

//     </>
//   )
// }

// export default Payment

import React, { useContext } from "react";
import { CartContext } from "./../context/CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const { state,dispatch } = useContext(CartContext);

  const total = state.cart
    .reduce((acc, item) => acc + Number(item.price), 0)
    .toFixed(2);

  const handlePayment = () => {
    dispatch({type:"CLEAR_CART"})
    alert("Payment Successful");
    navigate("/success");
  };

  return (
    <div className="payment-page">

      <div className="payment-container">

        {/* ================= PAYMENT FORM ================= */}

        <div className="payment-cart">

          <h2>Payment</h2>

          <p className="payment-subtitle">
            Complete your payment to place your order
          </p>

          <div className="amount-box">
            <span>Total Amount</span>

            <strong>₹{total}</strong>
          </div>

          <div className="payment-form">

            <label>Card Number</label>

            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength="19"
            />


            <label>Card Holder Name</label>

            <input
              type="text"
              placeholder="Enter card holder name"
            />


            <div className="card-row">

              <div className="card-field">

                <label>Expiry Date</label>

                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                />

              </div>


              <div className="card-field">

                <label>CVV</label>

                <input
                  type="password"
                  placeholder="CVV"
                  maxLength="3"
                />

              </div>

            </div>


            <button
              className="checkout-btn"
              onClick={handlePayment}
            >
              Pay ₹{total}
            </button>


            <button
              className="back-btn"
              onClick={() => navigate("/cart")}
            >
              Back to Cart
            </button>

          </div>

        </div>


        {/* ================= ORDER SUMMARY ================= */}

        <div className="order-summary">

          <h3>Order Summary</h3>

          <div className="summary-items">

            {state.cart.map((item) => (

              <div
                className="summary-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>

                  <p>{item.title}</p>

                  <span>
                    ₹{Number(item.price).toFixed(2)}
                  </span>

                </div>

              </div>

            ))}

          </div>


          <div className="summary-line">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="summary-line">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;