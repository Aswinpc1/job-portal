import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style= {{ padding: '10px', backgroundColor: '#333', color: 'white'  }}>
      <h2 style={{ display: 'inline-block', marginRight: '20px' }}>JobPortal</h2>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/signup" style={linkStyle}>Signup</Link>
    </nav>
  );
}

const linkStyle = {
  margin: '0 10px',
  color: 'white',
  textDecoration: 'none',
};

export default Navbar;
