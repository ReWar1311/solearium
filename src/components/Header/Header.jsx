import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-name">Sole-Arium</h1>
      <nav className="navbar">
        <ul className="nav">
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="#about" className="nav-links">About</a></li>
          <li><a href="#contact" className="nav-links">Contact</a></li>
            <li><a href="#services" className="nav-links">Services</a></li>
            <li><a href="#products" className="nav-links">Products</a></li>
            <li><a href="login" className="nav-links btn">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;