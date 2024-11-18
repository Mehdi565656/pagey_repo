import React from 'react';
import styles from './AudioBookPage.module.css';

const NewsletterForm: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.formInput}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterForm;