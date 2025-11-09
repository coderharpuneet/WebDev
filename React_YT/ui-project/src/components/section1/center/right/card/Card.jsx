import React from 'react'
import {ArrowRight} from 'lucide-react';
import styles from './Card.module.css'
const Card = () => {
  return (
    <div className={styles.main}>
      <img className={styles.img} src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
      
      <div className={styles.cardContent}>
        <h2 className={styles.badge}>1</h2>
        <div>
          <p className={styles.content}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde necessitatibus nihil aliquid nam quis. Veniam.</p>
          <div>
            <button className={styles.descBtn}>UnderPaid</button>
            <button className={styles.arrwBtn}><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card