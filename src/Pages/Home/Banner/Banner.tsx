import React, { useMemo } from "react";
import styles from "./Banner.module.scss";

import Button from "../../../Components/UI/Button/Button";
const Banner = () =>
  useMemo(() => {
    return <section>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h4 className={styles.contentLabel}>I using a free design by coffee styles</h4>
          <h2 className={styles.contentHeading}>Coffee Mugs</h2>
          <p className={styles.contentText}>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
          <Button>Explore our products</Button>
        </div>
      </div>
    </section>;
  }, []);

export default Banner;
