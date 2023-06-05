import React, { useState } from "react";
import styles from "./StoryItem.module.scss";
import { Link } from "react-router-dom";

import ProductButton from "../ProductButton/ProductButton";
import { motion, Variants } from "framer-motion";

interface props {
  title: string;
  image: string;
  description: string;
  date: string;
}

const StoryItem: React.FC<props> = ({ image, title, description, date }) => {
  const [isHover, setIsHover] = useState(false);
  const mouseEnter = () => {
    setIsHover(true);
  };
  const mouseLeave = () => {
    setIsHover(false);
  };
  const variants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    inView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="inView"
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
      className={styles.productItem}
    >
      <Link
        to="/"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.imgContainer}
        style={{
          backgroundImage: `${
            isHover
              ? "linear-gradient(180deg, rgba(29, 31, 46, 0.1), rgba(29, 31, 46, 0.1)),"
              : ""
          } url(${image})`,

          transition: "background-image 0.3s ease-in-out",
        }}
      >
        <div className={styles.btn}>
          <ProductButton>Read the full story</ProductButton>
        </div>
      </Link>
      <div className={styles.description}>
        <Link className={styles.link} to="">
          {title}
        </Link>
        <p>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </motion.div>
  );
};

export default StoryItem;
