import React from 'react';
import styles from './BookClub.module.css';

const NewsletterSection: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
      </div>
      <form className={styles.newsletterForm}>
        <div className={styles.formRow}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.emailInput}
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
          </div>
        </div>
        <div className={styles.subscribeButton}>
          <button type="submit" className={styles.primaryButton}>Subscribe</button>
        </div>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.backgroundImage} />
    </section>
  );
};

export default NewsletterSection;