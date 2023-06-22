import React from "react";
import Header from "../../../Components/UI/Header/Header";

import styles from "./Heading.module.scss";
const Heading = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <Header
          title="About"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        />
      </div>
    </div>
  );
};

export default Heading;