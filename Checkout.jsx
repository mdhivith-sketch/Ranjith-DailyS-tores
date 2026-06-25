import { useState } from "react";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="success-page">
        <h1>🎉 Order Placed Successfully</h1>

        <p>
          Thank you for shopping with Daily Stores.
        </p>

        <h3>
          Your order will be delivered soon.
        </h3>

        <button
          onClick={() => window.location.reload()}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        <h1>Checkout</h1>

        <div className="checkout-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Mobile Number"
          />

          <input
            type="text"
            placeholder="Door Number / Street"
          />

          <input
            type="text"
            placeholder="Area"
          />

          <input
            type="text"
            placeholder="City"
          />

          <input
            type="text"
            placeholder="District"
          />

          <input
            type="text"
            placeholder="State"
            value="Tamil Nadu"
          />

          <input
            type="text"
            placeholder="Pincode"
          />

          <select>
            <option>
              Select Payment Method
            </option>

            <option>
              Cash On Delivery
            </option>

            <option>
              UPI
            </option>

            <option>
              Debit Card
            </option>

            <option>
              Credit Card
            </option>
          </select>

          <button onClick={handleOrder}>
            Place Order
          </button>

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          <p>Lux Soap × 2</p>

          <p>Surf Excel × 1</p>

          <p>Comfort × 1</p>

          <hr />

          <h3>Total: ₹475</h3>

        </div>

      </div>
    </div>
  );
}

export default Checkout;