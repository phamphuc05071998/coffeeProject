import React, { ReactNode } from 'react'
import styles from "./Wrap.module.scss"
interface props {
    children: ReactNode
}
const Wrap:React.FC<props> = ({children}) => {
  return (
    <section className={styles.wrap}>
        {children}
    </section>
  )
}

export default React.memo(Wrap)