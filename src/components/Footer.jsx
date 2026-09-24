// import React from 'react'

// function Footer() {
//   return (
//     <>
//     <div className="footer-section">

//     </div>
      
//     </>
//   )
// }

// export default Footer
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* ================= ABOUT ================= */}

        <div className="footer-column footer-about">

          <h2>Shopkart</h2>

          <p>
            Your one-stop destination for quality products,
            great deals, and a simple shopping experience.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>


        {/* ================= CUSTOMER ================= */}

        <div className="footer-column">

          <h3>Customer Service</h3>

          <a href="#">
            Contact Us
          </a>

          <a href="#">
            Shipping & Delivery
          </a>

          <a href="#">
            Returns & Refunds
          </a>

          <a href="#">
            FAQs
          </a>

        </div>


        {/* ================= SOCIAL ================= */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-links">

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;