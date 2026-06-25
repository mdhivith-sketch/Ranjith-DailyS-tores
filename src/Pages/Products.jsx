import { useState } from "react";
import { products } from "../data";

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart");
  };

  return (
    <div className="products-page">

      <h1>All Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="product-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products-grid">

        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <h2>₹{product.price}</h2>

            <button
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;