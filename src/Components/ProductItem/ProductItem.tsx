import React, { useState } from "react";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
// import product from "./../../assets/img/product/unsplash.jpg";
import ProductButton from "../ProductButton/ProductButton";
import { motion, Variants } from "framer-motion";

interface props {
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  size: "large" | "small";
}

const ProductItem: React.FC<props> = ({
  image,
  title,
  price,
  salePrice,
  size,
}) => {
  const [isHover, setIsHover] = useState(false);
  const mouseEnter = () => {
    setIsHover(true);
  };
  const mouseLeave = () => {
    setIsHover(false);
  };
  const variants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    inView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="inView"
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
      className={styles.productItem}
    >
      <Link
        to="/"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.imgContainer}
        style={{
          backgroundImage: `${isHover ?  "linear-gradient(180deg, rgba(29, 31, 46, 0.1), rgba(29, 31, 46, 0.1)),": ""} url(${image})`,
          height: size === "large" ? "54rem" : "38rem",
          transition: 'background-image 0.3s ease-in-out',
        }}
      >
        <div className={styles.btn}>
          <ProductButton>Explore mug</ProductButton>
        </div>
      </Link>
      <span className={styles.saleLabel}>On sale.</span>
      <div className={styles.description}>
        <Link className={styles.link} to="">
          {title}
        </Link>
        <div className={styles.priceContainer}>
          <div className={styles.priceSale}>${salePrice} USD</div>
          <div
            className={styles.price}
            style={{
              textDecoration: salePrice ? "line-through" : "none",
            }}
          >
            ${price} usd
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductItem;
