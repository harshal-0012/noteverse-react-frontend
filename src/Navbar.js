import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { href: "", text: "Home" },
  { href: "#about-us", text: "About Us" },
  { href: "#Services", text: "Services", id: "Services" },
  { href: "dashboard1.html", text: "Library" }
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  const handleNavClick = (href) => {
    setActiveNav(href);
  };

  return (
    <nav id="navbar">
      <div className="navbar-menu">
        <ul className="navbar" id="navbar-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                id={item.id || undefined}
                className={activeNav === item.href ? 'active' : ''}
                onClick={() => handleNavClick(item.href)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-icon" id="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="buttons" id="buttons2">
        <button onClick={() => window.location.href='login.html'}>Login</button>
        <button onClick={() => window.location.href='signUp.html'}>SignUp</button>
      </div>
    </nav>
  );
};

export default Navbar;
