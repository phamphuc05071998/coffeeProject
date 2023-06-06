import React from "react";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import CardImage from "../CardImage/CardImage";

interface props {
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  height: "54rem "| "36rem" | "21rem",
}

const ProductItem: React.FC<props> = ({
  image,
  title,
  price,
  salePrice,
  height
}) => {

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
     <CardImage image={image} height={height} buttonText="explore mug"/>
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
