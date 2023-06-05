import React, { ReactNode } from 'react'
import styles from "./ContentWrap.module.scss"
interface props {
    children: ReactNode
}
const ContentWrap:React.FC<props> = ({children}) => {
  return (
    <section className={styles.wrap}>
        {children}
    </section>
  )
}

export default React.memo(ContentWrap)