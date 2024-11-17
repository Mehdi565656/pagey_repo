import React from 'react';
import styles from './BookLibrary.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="emailInput" className={styles.inputLabel}>Email</label>
          <input
            type="email"
            id="emailInput"
            className={styles.emailInput}
            placeholder="Enter your email"
            aria-label="Enter your email"
            required
          />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1931ae78a71725b3351c63d673e6499751dcd9c40c2f18a3b9373696f2804f0?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.newsletterBackground} />
    </section>
  );
};

export default Newsletter;