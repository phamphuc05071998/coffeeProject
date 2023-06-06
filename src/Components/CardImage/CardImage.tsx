import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "./CardImage.module.scss"
import ProductButton from '../ProductButton/ProductButton'
interface props {
    image: string,
    height: "54rem "| "36rem" | "21rem",
    buttonText: string
}

const CardImage:React.FC<props> = ({image, height, buttonText}) => { 
    const [isHover, setIsHover] = useState(false);
    const mouseEnter = () => {
      setIsHover(true);
    };
    const mouseLeave = () => {
      setIsHover(false);
    };
  return (
    <Link
    to="/"
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}
    className={styles.imgContainer}
    style={{
      backgroundImage: `${isHover ?  "linear-gradient(180deg, rgba(29, 31, 46, 0.1), rgba(29, 31, 46, 0.1)),": ""} url(${image})`,
      height: height,
      transition: 'background-image 0.3s ease-in-out',
    }}
  >
    <div className={styles.btn}>
      <ProductButton>{buttonText}</ProductButton>
    </div>
  </Link>
  )
}

export default CardImage