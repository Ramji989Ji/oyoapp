import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navbarContainer = {
    display: "flex",
    justifyContent: "space-between", // Space items evenly along the main axis (horizontally)
    alignItems: "center", // Center items along the cross axis (vertically)
    backgroundColor: "whitesmoke",
    padding: "10px 20px",
  };

  const logoStyle = {
    color: "red",
    fontFamily: "Sans-Serif",
    fontSize: "50px",
    textDecoration: "none",
    
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    marginLeft: "20px",
  };

  return (
    <div style={navbarContainer}>
      <div>
        <a href="/" style={logoStyle}>OYO</a>
      </div>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>Admin</a>
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
