import React, { useState } from "react";
import Wrap from "../../../Layouts/Wrap/Wrap";
import styles from "./Product.module.scss";
import Header from "../../../Components/UI/Header/Header";

import SlideSection from "../SlideSection/SlideSection";
import ProductList from "../../../Components/ProductList/ProductList";

const Product = () => {
  const [activeButton, setActiveButton] = useState(1);
  const onClickBtnHandler = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  const activeButtonHandler = (buttonId: number) => {
    return `${
      buttonId === activeButton ? `${styles.btn} ${styles.active}` : styles.btn
    } `;
  };
  return (
    <Wrap>
      <div className={styles.header}>
        <Header
          title="Our products"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div className={styles.btnGroup}>
        <button
          className={activeButtonHandler(1)}
          onClick={() => onClickBtnHandler(1)}
        >
          All product
        </button>
        <button
          className={activeButtonHandler(2)}
          onClick={() => onClickBtnHandler(2)}
        >
          Coffee mugs
        </button>
        <button
          className={activeButtonHandler(3)}
          onClick={() => onClickBtnHandler(3)}
        >
          Other
        </button>
        <button
          className={activeButtonHandler(4)}
          onClick={() => onClickBtnHandler(4)}
        >
          Premium
        </button>
        <button
          className={activeButtonHandler(5)}
          onClick={() => onClickBtnHandler(5)}
        >
          Tea mugs
        </button>
      </div>
      <SlideSection />
      <ProductList />
    </Wrap>
  );
};

export default Product;
