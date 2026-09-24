// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// function OrderSuccess() {
//     const navigate =useNavigate();
//   return (
//     <>
//     <div className="success-container">
//         <div className="success-card">
//             <h1>Order Placed Successfully</h1>
//             <button onClick={()=>navigate("/")}>Go to Home</button>
//         </div>
//     </div>

//     </>
//   )
// }

// export default OrderSuccess

import React from "react";
import { useNavigate } from "react-router-dom";


function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for your purchase.
          Your order has been placed successfully.
        </p>

        <p className="success-message">
          We appreciate your business and hope
          you enjoy your products.
        </p>

        <div className="success-buttons">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>

          <button
            className="products-btn"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;