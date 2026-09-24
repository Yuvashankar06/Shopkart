import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      icon: "👕",
      title: "Men's Clothing",
      text: "Trendy clothes for every occasion",
    },
    {
      icon: "💎",
      title: "Jewelry",
      text: "Elegant accessories for every style",
    },
    {
      icon: "👗",
      title: "Women's Clothing",
      text: "Stylish fashion made for you",
    },
    {
      icon: "💻",
      title: "Electronics",
      text: "Latest gadgets and accessories",
    },
  ];

  const featuredProducts = [
    {
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: "₹22.30",
    },
    {
      image:
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      title: "Mens Cotton Jacket",
      price: "₹55.99",
    },
    {
      image:
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      title: "Mens Casual Slim Fit",
      price: "₹15.99",
    },
    {
      image:
        "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      title: "Women's Jacket",
      price: "₹56.99",
    },
  ];

  return (
    <div className="home">

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            ✨ New Collection
          </span>

          <h1>
            Everything You Need,
            <span> All In One Place</span>
          </h1>

          <p>
            Discover quality products, amazing deals and
            stylish collections designed for you.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn primary-btn">
              Shop Now
            </Link>

            <Link to="/products" className="btn secondary-btn">
              Explore Products
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-circle">
            🛍️
          </div>
        </div>
      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories">

        <div className="section-heading">
          <h2>Shop By Category</h2>

          <p>
            Explore our wide range of products
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category, index) => (
            <Link
              to="/products"
              className="category-card"
              key={index}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.text}</p>

              <span>
                Shop Now →
              </span>
            </Link>
          ))}

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="featured">

        <div className="section-heading">

          <h2>Featured Products</h2>

          <p>
            Our most popular products
          </p>

        </div>

        <div className="featured-grid">

          {featuredProducts.map((product, index) => (

            <div className="featured-card" key={index}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="product-info">

                <h3>
                  {product.title}
                </h3>

                <p className="price">
                  {product.price}
                </p>

                <Link
                  to="/products"
                  className="product-btn"
                >
                  View Product
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="view-all">

          <Link
            to="/products"
            className="btn primary-btn"
          >
            View All Products
          </Link>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-us">

        <div className="section-heading">

          <h2>Why Choose Us?</h2>

          <p>
            We make shopping simple and convenient
          </p>

        </div>

        <div className="features">

          <div className="feature-card">

            <div className="feature-icon">
              🚚
            </div>

            <h3>Fast Delivery</h3>

            <p>
              Get your orders delivered quickly
              and safely to your doorstep.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔒
            </div>

            <h3>Secure Payment</h3>

            <p>
              Your payment information is
              protected with secure checkout.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>Quality Products</h3>

            <p>
              We provide carefully selected
              products with great quality.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💬
            </div>

            <h3>Customer Support</h3>

            <p>
              Our support team is always
              ready to help you.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <h2>
            Ready To Start Shopping?
          </h2>

          <p>
            Explore our collection and find
            something you love.
          </p>

          <Link
            to="/products"
            className="btn cta-btn"
          >
            Shop Now
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;