import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.content}>
        <h2 className={styles.title}>Subscribe to Our Newsletter</h2>
        <p className={styles.description}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.backgroundImage} />
    </section>
  );
};

export default Newsletter;