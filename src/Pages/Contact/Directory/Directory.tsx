import React from "react";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import styles from "./Directory.module.scss";
import Wrap from "../../../Layouts/Wrap/Wrap";
const Directory = () => {
  return (
    <Wrap>
      <BreakLine>Directory</BreakLine>
      <div className={styles.directory}>
      <div className={styles.label}>Developer</div>
        <div className={styles.name}> Pham Xuan Phuc</div>
        <div className={styles.info}>
          <div>0972462798</div>
          <div>phamphuc05071998@gmail.com</div>
        </div>
        <div className={styles.label}>Press</div>
        <div className={styles.name}> Robb kohler</div>
        <div className={styles.info}>
          <div>086-374-4962</div>
          <div>robb.kohler@coffeestyle.com</div>
        </div>
        <div className={styles.label}>Management</div>
        <div className={styles.name}> Robb Dayana</div>
        <div className={styles.info}>
          <div>354-341-2750</div>
          <div>roob.dayana@coffeestyle.com</div>
        </div>
        <div className={styles.label}>Support</div>
        <div className={styles.name}> Warren Marsh</div>
        <div className={styles.info}>
          <div>531-403-0376</div>
          <div>warren.marsh@coffeestyle.com</div>
        </div>
      </div>
      </Wrap>
  );
};

export default Directory;
