import React from 'react'
import styles from "./ProductButton.module.scss"
interface props {
    children: string
}

const ProductButton:React.FC<props> = ({children}) =>  {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default React.memo(ProductButton)