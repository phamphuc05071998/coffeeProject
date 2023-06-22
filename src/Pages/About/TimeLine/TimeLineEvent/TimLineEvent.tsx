import React from "react";
import styles from "./TimeLineEvent.module.scss"
interface props {
    count: string,
   
    title: string,
    description?: string,
    date: string
}

const TimLineEvent:React.FC<props> = ({count, date, title, description}) => {
  return (
    <div className={styles.timeLineEvent}>
      <div className={styles.count}>{count}</div>
      <div className={styles.date}>{date}</div>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.description}>
       {description}
      </p>
    </div>
  );
};

export default TimLineEvent;
