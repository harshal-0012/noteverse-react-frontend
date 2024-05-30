// Sidebar.js

import React from 'react';
import styles from './styles.module.css'; // Import CSS module
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const menuItems = [
  { icon: 'fas fa-home', text: 'Home', link: '#' },
  { icon: 'fas fa-book', text: 'Library', link: '#' },
  { icon: 'fas fa-sticky-note', text: 'Notes', link: '#' },
  { icon: 'fas fa-cloud-upload-alt', text: 'Upload', link: '#' },
];

const footerItems = [
  { icon: 'fas fa-user', text: 'My Profile', link: '#' },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <h2>Noteverse</h2>
        <div className={styles['menu-heading']}>
          <h3>Menu</h3>
          <hr className={styles['menu-line']} />
        </div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <i className={item.icon}></i> {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <h3>Preferences</h3>
        <hr className={styles['menu-line']} />
        <ul>
          {footerItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <i className={item.icon}></i> {item.text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </aside>
  );
}

export default Sidebar;
