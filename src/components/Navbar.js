import React from 'react';

const Navbar = (props) => {

  return (
      <nav className="Navbar">
          <img src="/images/logo.png" alt="keeplite logo" className="brandImg"/>
        <header href="/" className="brand">KeepLite</header>
      </nav>
  );
}

export default Navbar;