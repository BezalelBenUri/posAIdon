import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className = "header">
      <div className = "header__logo ">
        <img src = {process.env.PUBLIC_URL + '../images/rainlogo.png'} alt = "pos logo"/>
      </div>
      <nav className = "header__nav">
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href = "DashboardPage">Dashboard</a></li>
          <li><a href = "DashboardPage">FAQ</a></li>
          <li><a href = "DashboardPage">Get Started</a></li>
        </ul>
      </nav>
      <div className = "header__user">
        <Link to = "/LoginPage">
          <button className = "header__login" >Log In</button>
        </Link>
        <Link to = "/RegistrationPage">
          <button className = "header__resgister" >Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;