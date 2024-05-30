import React, { useState } from 'react';
import navstyles from './Navbar.module.css'; // Import Navbar styles using navstyles

const navItems = [
  { href: "", text: "Home" },
  { href: "#about-us", text: "About Us" },
  { href: "#Services", text: "Services", id: "Services" },
  { href: "#library", text: "Library", page: "Library" } // Added page property for Library
];

const Navbar = ({ setPage }) => { // Accept setPage as a prop
  const [activeNav, setActiveNav] = useState("");

  const handleNavClick = (href, page) => {
    setActiveNav(href);
    setPage(page); // Update the page state in App component
  };

  return (
    <nav className={navstyles.nav}>
      <div className={navstyles['navbar-menu']}>
        <ul className={navstyles.navbar} id={navstyles['navbar-list']}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                id={item.id || undefined}
                className={activeNav === item.href ? navstyles.active : ''}
                onClick={() => handleNavClick(item.href, item.page || "Home")} // Pass page as "Home" if not specified
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={navstyles['menu-icon']} id={navstyles['menu-icon']}>
        <div className={navstyles.bar}></div>
        <div className={navstyles.bar}></div>
        <div className={navstyles.bar}></div>
      </div>
      <div className={navstyles.buttons} id={navstyles.buttons2}>
        <button onClick={() => window.location.href='login.html'}>Login</button>
        <button onClick={() => window.location.href='signUp.html'}>SignUp</button>
      </div>
    </nav>
  );
};

export default Navbar;
