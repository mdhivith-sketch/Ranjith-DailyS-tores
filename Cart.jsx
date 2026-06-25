import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lux Soap",
      price: 45,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1584305574647-acf8069a3d33?w=400"
    },
    {
      id: 2,
      name: "Surf Excel",
      price: 165,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400"
    }
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty-box">
              <button onClick={() => decreaseQty(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQty(item.id)}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ₹{total}</h2>

        <button>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;