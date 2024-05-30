import React from 'react'
import styles from './styles.module.css'; // Import CSS module
import Sidebar from './Sidebar';
import Header1 from './Header1';
import MainContent from './MainContent1';
export default function dashboard() {
  return (
   
<div className={styles['main-container']}>
      <Sidebar />
      <div className={styles['right-container']}>
        <Header1 />
        <MainContent />
      </div>
    </div>
    
  )
}
