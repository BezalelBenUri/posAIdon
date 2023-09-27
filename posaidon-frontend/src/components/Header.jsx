import React from 'react';

function Header() {
  return (
    <header>
      {/* JSX code for header */}
      <nav>
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href = "/dashboard">Dashboard</a></li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;