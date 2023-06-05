import React from "react";
import styles from "./ProductItemLarge.module.scss";
import { Link } from "react-router-dom";
import product from "./../../assets/img/product/unsplash.jpg";
import ProductButton from "../ProductButton/ProductButton";

interface props {
  title: string;
  image: string;
  price: number;
  salePrice: number;
}
const ProductItemLarge: React.FC<props> = ({
  title,
  image,
  price,
  salePrice,
}) => {
  return (
    <div className={styles.productItem}>
      <Link to="/"
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${product}`,
        }}
      >
        <div className={styles.btn}>
          <ProductButton>Explore mug</ProductButton>
        </div>
      </Link>
      <div className={styles.description}>
        <Link className={styles.link} to="">Pink Premium Ceramic</Link>
        <div className={styles.priceContainer}>
          <div className={styles.priceSale}>$50</div>
          <div className={styles.price}>$99.00 usd</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemLarge;
