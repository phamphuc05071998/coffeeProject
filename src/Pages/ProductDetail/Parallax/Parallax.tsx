import React from "react";
import styles from "./Parallax.module.scss";
import { SlDiamond } from "react-icons/sl";
import {GoLightBulb} from "react-icons/go"
const Parallax = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>&nbsp;</div>
      <div className={styles.content}>

      <div className={styles.contentDetail}>
        <h3 className={styles.heading}>
          Handmade by <span>CoffeeStyle.</span>
        </h3>
        <p className={styles.description}>
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>
        <div className={styles.intro}>
          <div className={styles.introDetail}>
            <SlDiamond size={24}/>
            <h4 className={styles.introHeading}>Premium quality</h4>
            <p className={styles.introDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
          <div className={styles.introDetail}>
            <GoLightBulb size={24}/>
            <h4 className={styles.introHeading}>Premium quality</h4>
            <p className={styles.introDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
          
        </div>
      </div>
      </div>

    </div>
  );
};

export default Parallax;
