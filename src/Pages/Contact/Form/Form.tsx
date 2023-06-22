import React from "react";
import styles from "./Form.module.scss";
import { Link } from "react-router-dom";
import Wrap from "../../../Layouts/Wrap/Wrap";
import Button from "../../../Components/UI/Button/Button";
const Form = () => {
  return (
    <Wrap>
      <div className={styles.container}>
        <form className={styles.form}>
          <header>
            <div className={styles.label}>contact form</div>
            <h3 className={styles.heading}>
              Drop us your message and I'll get back to you as soon as possible.
            </h3>
          </header>
          <div className={styles.formGroup}>
            <label className={styles.label}>name</label>
            <input
              className={styles.formInput}
              type="text"
              placeholder="James coffee"
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>email address</label>
            <input
              className={styles.formInput}
              type="email"
              placeholder="customer@coffeestyle.io"
            ></input>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your message</label>
            <textarea
              className={styles.formText}
              placeholder="hi i world like to ask something about mugs."
            ></textarea>
          </div>
          <Button>Send message</Button>
        </form>
        <div className={styles.contact}>
            <div className={styles.contactInfo}>

          <div className={styles.label}>contact form</div>
          <h3 className={styles.heading}>CoffeeStyle. Inc</h3>
          <p>Pride Ave,</p>
          <p>Hamlyn Heights</p>
          <p>VIC 3215</p>
          <p>Australia</p>
          </div>

          <div className={styles.contactGroup}>
            <div className={styles.label}>Call us</div>
            <Link className={styles.link} to="tel:+1 (415) 555-1212">
              +1 (415) 555-1212
            </Link>
          </div>
          <div className={styles.contactGroup}>
            <div className={styles.label}>Email us</div>
            <Link className={styles.link} to="mailto:us@coffeestyle.io">
              us@coffeestyle.io
            </Link>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Form;
