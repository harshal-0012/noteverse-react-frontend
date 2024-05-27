import React from 'react';
import penImage from './images/pen.png';
import gifImage from './images/Untitled design(1).gif';
import './Header.css';

const Header = () => (
  <header id="header">
    <div className="header-content" id="header-content">
      <h1 id="header-title">
        NOTEVERSE<span><img src={penImage} alt="Pen" id="pen-img" /></span>
      </h1>
      <h3 id="header-subtitle">Read With Ease</h3>
      <button id="learn-more-btn">Learn More</button>
    </div>
    <div className="header-name" id="header-name">
      <img src={gifImage} alt="Header GIF" id="header-gif" />
    </div>
  </header>
);

export default Header;