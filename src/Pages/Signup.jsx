import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !mobile || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      mobile,
      password,
    };

    localStorage.setItem("dailyStoreUser", JSON.stringify(user));

    alert("Account Created Successfully");

    // GO BACK TO LOGIN PAGE (/)
    window.location.href = "/";
  };

  return (
    <div className="signup-page">

      <div className="signup-box">

        <h1>Create Account</h1>
        <p>Join Ranjith Stores</p>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Create Account
        </button>

        <p>
          Already have account? <a href="/">Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;