import React from 'react'
import styles from "./CtaSection.module.scss"
import Button from '../UI/Button/Button'
const CtaSection = () => {
  return (
    <section className={styles.container}>
        <form className={styles.form}>
            <div className={styles.breakLine}>Sign up and get free coffee bags</div>
            <h2 className={styles.headLine}>Coffee Updates</h2>
            <div className={styles.formGround}>
                <input className={styles.formInput} type='email' placeholder='customer@coffeestyle.io'></input>
                <Button>Subscribe</Button>
            </div>
        </form>
    </section>
  )
}

export default CtaSection