import React from 'react'
import Left from './left/Left'
import Right from './right/Right'
import styles from './Center.module.css';

const Center = () => {
  return (
    <div className={styles.center}>
     <div className={styles.left}>
          <Left />
     </div>
     <div className={styles.right}>
     <Right />

     </div>
    </div>
  )
}

export default Center