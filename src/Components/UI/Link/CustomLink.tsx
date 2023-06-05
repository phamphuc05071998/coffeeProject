import React from 'react'
import styles from "./CustomLink.module.scss"
import { Link } from 'react-router-dom'
interface props {
    children: string,
    href: string,
}
const CustomLink:React.FC<props> = ({children, href}) => {
  return (
    <Link className={styles.link} to={href}>{children}</Link>
  )
}

export default React.memo(CustomLink)