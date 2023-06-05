import React from "react";
import styles from "./BreakLine.module.scss";

interface props {
  children: string;
}

const BreakLine: React.FC<props> = ({ children }) => {
  return <div className={styles.breakLine}>{children}</div>;
};

export default React.memo(BreakLine);
