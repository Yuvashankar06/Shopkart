import { useContext, useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Footer from './components/Footer';

function App() {
  const {state} = useContext(ThemeContext)
  return (
    <div className={state.theme === "light" ? "dark" : "light" }>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
