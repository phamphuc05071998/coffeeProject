import React from "react";
import styles from "./TextGroup.module.scss";
import Button from "../Button/Button";
interface props  {
    label: string,
    title: string,
    description: string,
    buttonText: string
}
const TextGroup:React.FC<props> = ({label, title, description, buttonText}) => {
  return (
    <div className={styles.heading}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.headline}>{title}</h2>
      <p className={styles.text}>{description}</p>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default TextGroup;
