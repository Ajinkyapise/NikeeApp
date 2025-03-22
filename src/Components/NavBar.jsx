import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="\images\brand_logo.png" alt="Logo" className="logo" />
      </div>
      <ul>
        <li herf="#">Home</li>
        <li herf="#">Products</li>
        <li herf="#">About</li>
        <li herf="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default NavBar;
