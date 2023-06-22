import React from "react";
import styles from "./Content.module.scss";
import Wrap from "../../../Layouts/Wrap/Wrap";
import image from "./../../../assets/img/California-Office.jpg";
import image2 from "./../../../assets/img/London Office.jpg";

const Content = () => {
  return (
    <Wrap>
      <div className={styles.container}>
        <div className={styles.address}>
          <div className={styles.addressImage}>
            <img src={image} alt="" />
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addressLabel}>United Kingdom</div>
            <div className={styles.addressDetail}>Canary Wharf, London</div>
            <div>Jubilee Place</div>
            <div>London</div>
            <div>E14 5NY</div>
            <div className={styles.addressLabel}>opening times</div>
            <div>Mon - Fri 08:00 to 22:00</div>
            <div>Sat - 09:00 to 20:00</div>
            <div>Sun - 12:00 to 18:00</div>
          </div>
        </div>
         <div className={styles.address}>
          <div className={styles.addressImage}>
            <img src={image2} alt="" />
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addressLabel}>United Kingdom</div>
            <div className={styles.addressDetail}>Canary Wharf, London</div>
            <div>Jubilee Place</div>
            <div>London</div>
            <div>E14 5NY</div>
            <div className={styles.addressLabel}>opening times</div>
            <div>Mon - Fri 08:00 to 22:00</div>
            <div>Sat - 09:00 to 20:00</div>
            <div>Sun - 12:00 to 18:00</div>
          </div>
        </div>
      </div>
     
    </Wrap>
  );
};

export default Content;
