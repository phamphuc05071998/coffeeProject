import React from 'react'
import styles from "./ParallaxSection.module.scss"

interface props {
  image: string
}
const ParallaxSection:React.FC<props> = ({image}) => {
  return (
    <div className={styles.parallax} style={{
      backgroundImage: `url(${image})`
    }}>

    </div>
  )
}

export default ParallaxSection