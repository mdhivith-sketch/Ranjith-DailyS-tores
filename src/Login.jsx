import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(
      localStorage.getItem("dailyStoreUser")
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      alert("Login Successful");
      window.location.href = "/";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <h1>🛒 Daily Stores</h1>

        <h2>
          Tamil Nadu's No.1 Trusted
          Neighbourhood Store
        </h2>

        <p>
          Shop daily essentials, soaps,
          detergents, pooja items,
          groceries, fashion and more.
        </p>

        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900"
          alt="store"
        />
      </div>

      <div className="login-right">

        <div className="login-box">

          <h2>Welcome Back</h2>

          <p>Login to continue shopping</p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <a href="/signup">
            Create New Account
          </a>

        </div>

      </div>

    </div>
  );
}

export default Login;