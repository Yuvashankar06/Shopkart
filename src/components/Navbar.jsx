// import React, { useContext, useReducer } from "react";
// import Home from "./../pages/Home";
// import { Link } from "react-router-dom";
// import Products from "./../pages/Products";
// import Cart from "./../pages/Cart";
// import Login from "./../pages/Login";
// import Register from "./../pages/Register";
// import router from "../router";
// import { ThemeContext } from "../context/ThemeContext";


// const Navbar = () => {
//   const{state,dispatch}=React.useContext(ThemeContext);
//   return (
//     <nav>
//       <Link to="" 
//       style={{ textDecoration: "none", color: "white" }}
//       >
//         Home
//       </Link>
//       <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
//         Products
//       </Link>
//       <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
//         Cart
//       </Link>
//       <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
//         Login
//       </Link>
//       <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
//         Register
//       </Link>

//       <button className="theme-btn"
//       onClick={()=>{
//         dispatch({type:"ToggleTheme"});
//       }}>
//         {state.theme === "light" ? "LightMode" : "DarkMode"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { state:themestate, dispatch } = React.useContext(ThemeContext);
  const {state}=useContext(CartContext);

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      <Link to="/cart">Cart<sup> {state.cart.length} </sup></Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <button
        className="theme-btn"
        onClick={() => {
          dispatch({ type: "ToggleTheme" });
        }}
      >
        {state.theme === "light" ? "DarkMode" : "LightMode"}
      </button>
    </nav>
  );
};

export default Navbar;