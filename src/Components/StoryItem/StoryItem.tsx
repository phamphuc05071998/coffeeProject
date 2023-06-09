import React from "react";
import styles from "./StoryItem.module.scss";
import { Link } from "react-router-dom";

import { motion, Variants } from "framer-motion";
import CardImage from "../CardImage/CardImage";

interface props {
  title: string;
  image: string;
  description: string;
  date: string;
}

const StoryItem: React.FC<props> = ({ image, title, description, date }) => {

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
      className={styles.storyItem}
    >
      <CardImage buttonText="Read the full story" image={image} height="36rem"/>
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
