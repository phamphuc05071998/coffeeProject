import React from "react";
import styles from "./Header.module.scss";

interface props {
  title: string;
  desc: string;
}

const Header: React.FC<props> = ({ title, desc }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headLine}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </header>
  );
};

export default React.memo(Header);
