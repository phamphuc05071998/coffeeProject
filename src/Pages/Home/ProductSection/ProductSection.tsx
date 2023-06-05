import React from "react";
import styles from "./ProductSection.module.scss";
import CustomLink from "../../../Components/UI/Link/CustomLink";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import ProductItemLarge from "../../../Components/ProductItemLarge/ProductItemLarge";
import Wrap from "../../../Layouts/Wrap/Wrap";
import ProductList from "../../../Components/ProductList/ProductList";
import Button from "../../../Components/UI/Button/Button";
import bookImg from "./../../../assets/img/book.jpg";
import cupImg from "./../../../assets/img/Image-2.jpg";
import coffeeImg from "./../../../assets/img/coffie_Image.jpg";

const Product = () => {
  return (
    <Wrap>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Even the all-powerful Pointing has no control about the blind texts.
        </h2>
        <p className={styles.text}>
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <CustomLink href="/about">Read the full story</CustomLink>
      </div>
      <BreakLine>Featured mugs</BreakLine>
      <div className={styles.productList}>
        <ProductItemLarge title="" price={0} salePrice={0} image="" />
        <ProductItemLarge title="" price={0} salePrice={0} image="" />
      </div>
      <BreakLine>MORE PRODUCTS</BreakLine>
      <div className="mb-100">
        <ProductList />
      </div>
      <BreakLine>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</BreakLine>
      <div className={styles.magazine}>
        <div className={styles.magazineHeading}>
          <span className={styles.magazineLabel}>Premium offer</span>
          <h2 className={styles.magazineHeadline}>Get our Coffee Magazine</h2>
          <p className={styles.magazineText}>Get our Coffee Magazine</p>
          <Button>Start shopping</Button>
        </div>
        <div className={styles.magazineImages}>
          <div className={styles.magazineImageContain}>
            <img className={styles.magazineImage} src={bookImg} alt="book" />
          </div>
          <div className={styles.magazineImageContain}>
            <img className={styles.magazineImage} src={cupImg} alt="book" />
          </div>
          <div className={styles.magazineImageContain}>
            <img className={styles.magazineImage} src={coffeeImg} alt="book" />
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Product;
