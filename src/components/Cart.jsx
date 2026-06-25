import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(items);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <h3>No Products In Cart</h3>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <button
        onClick={() =>
          (window.location.href = "/checkout")
        }
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;