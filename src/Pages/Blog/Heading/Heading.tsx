import React from "react";
import Header from "../../../Components/UI/Header/Header";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import styles from "./Heading.module.scss";
const Heading = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <Header
          title="Read coffee stories on our Blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        />
      </div>
      <BreakLine>featured posts</BreakLine>
    </div>
  );
};

export default Heading;
