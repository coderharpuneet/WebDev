import React from 'react'
import styles from './Header.module.css';


const Header = () => {
  return (
    <div className={styles.head}>
      <button className={styles.btn1}>TARGET AUDIENCE</button>
      <button className={styles.btn2}>DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Header