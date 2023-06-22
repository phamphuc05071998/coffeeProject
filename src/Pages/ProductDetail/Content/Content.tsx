import React from "react";
import styles from "./Content.module.scss";
import Wrap from "../../../Layouts/Wrap/Wrap";
import image from "./../../../assets/img/product/trent-erwin-570303-unsplash.jpg";
const Content = () => {
  return (
    <Wrap>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
          <div className={styles.saleLabel}>On sale.</div>
        </div>
        <div className={styles.productDetail}>
          <h2 className={styles.productName}>Red Love Cup</h2>
          <p className={styles.productDesc}>
            Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et
            corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi
            quaerat sed repellendus.
          </p>
          <div className={styles.productPriceContainer}>
            <div className={styles.productSalePrice}>$25.00 USD</div>
            <div className={styles.productPrice}>$37.00 USD</div>
          
          </div>
          <div className={styles.label}>Quantity</div>
          <div className={styles.productBtn}>
                <input className={styles.input} type="number" min={1} step={1} defaultValue={1} ></input>
                <button className={styles.btn}>
                    Add to cart
                </button>
            </div>
        </div>
        <div className={styles.ProductDetail}>
          <div className={styles.label}>Details</div>
          <p className={styles.ProductDescription}>
            Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas
            vel perferendis accusantium eum cum voluptates libero doloribus
            voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet
            suscipit omnis eum necessitatibus quos doloribus. Ut placeat et
            corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi
            quaerat sed repellendus. Perspiciatis rerum commodi dolore
            consequatur voluptates accusantium velit. Aut dicta iusto neque ea
            voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia
            occaecati enim omnis repudiandae labore.
          </p>
        </div>
        <div className={styles.productDimension}>
          <div className={styles.label}>Dimensions</div>
          <ul className={styles.productDimensionDetail}>
            <li>
              Length (in): <span>56.0</span>{" "}
            </li>
            <li>
              Height (in): <span>56.0</span>{" "}
            </li>
            <li>
              Width (in): <span>56.0</span>{" "}
            </li>
            <li>
              Weight (in): <span>56.0</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </Wrap>
  );
};

export default Content;
