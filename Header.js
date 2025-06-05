import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-title">Beauty da Lu</div>
      <div className="header-search-cart">
        <div className="search-box">
          <span role="img" aria-label="search">🔍</span>
          <input type="text" placeholder="Buscar produtos..." />
        </div>
        <div className="cart-icon">
          <span role="img" aria-label="cart">🛒</span>
        </div>
      </div>
    </header>
  );
}
export default Header;