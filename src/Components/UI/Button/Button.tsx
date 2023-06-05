import React from 'react'
import styles from "./Button.module.scss"
interface props {
    children: string
}

const Button:React.FC<props> = ({children}) =>  {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default React.memo(Button)