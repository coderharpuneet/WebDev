import React from 'react'
import styles from './Left.module.css'
import { ArrowUpRight } from 'lucide-react';

const Left = () => {
  return (
    <div className={styles.leftMain}>
     <div>
          <h3 style={{fontSize:56, marginBottom:14}}>Prospective <span style={{color:'grey'}}>customer</span> segementation</h3>
          <p style={{color:'gray', fontSize:26}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe itaque eius, suscipit enim sed?</p>
     </div>
     <div style={{alignSelf:'flex-start'}}>
          <ArrowUpRight size={85} />
     </div>
    </div>
  )
}

export default Left