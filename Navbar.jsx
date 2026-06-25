function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Ranjith Stores</h2>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
      />

      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;