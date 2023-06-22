import React from 'react'
import styles from "./Line.module.scss"
const Line = () => {
  return (
    <div className={styles.line}>
    <div className={styles.horizontalLine}></div>
    <div className={styles.verticalLine}></div>
  </div>
  )
}

export default Line