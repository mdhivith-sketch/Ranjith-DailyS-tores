import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("dailyStoreUser"));

    if (user && user.email === email && user.password === password) {
      alert("Login Successful");

      // GO TO HOME PAGE
      window.location.href = "/home";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <h1>🛒 Ranjith Stores</h1>
        <h2>Welcome Back</h2>
        <p>Login to continue shopping</p>
      </div>

      <div className="login-right">

        <div className="login-box">

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <p>
            New user? <a href="/signup">Create Account</a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;