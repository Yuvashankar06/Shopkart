import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useMemo } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the api");
        }
        return response.json();
      })
      .then((dta) => setProducts(dta))
      .catch(()=>setError("Something Went Wrong"))
  }, []);

  // applying logic for filteration
  const filteredProduct = useMemo(() => {
    return products.filter((product) => product.price < 100);
  }, [products]);
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Products</h1>
      <div className="products-grid">
        {filteredProduct.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
