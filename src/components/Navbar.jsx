import React, { useContext, useReducer } from "react";
import Home from "./../pages/Home";
import { Link } from "react-router-dom";
import Products from "./../pages/Products";
import Cart from "./../pages/Cart";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import router from "../router";
import { ThemeContext } from "../context/ThemeContext";


const Navbar = () => {
  const{state,dispatch}=React.useContext(ThemeContext);
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "black",
        textDecoration: "none",
        color: "white",
        gap: "20px",
      }}
    >
      <Link to="" 
      style={{ textDecoration: "none", color: "white" }}
      >
        Home
      </Link>
      <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
        Products
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        Cart
      </Link>
      <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
        Login
      </Link>
      <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
        Register
      </Link>

      <button className="theme-btn"
      onClick={()=>{
        dispatch({type:"ToggleTheme"});
      }}
       style={{
        padding:"5px 10px",
        borderRadius:"10px",
        fontWeight:"bold",
        border:"none"
      }}>
        {state.theme === "light" ? "LightMode" : "DarkMode"}
      </button>
    </nav>
  );
};

export default Navbar;
