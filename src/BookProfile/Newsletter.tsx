import React from 'react';
import styles from './BookDetails.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h3 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h3>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.emailInput}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;