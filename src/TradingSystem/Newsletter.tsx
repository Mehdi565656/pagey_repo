import React from 'react';
import styles from './TradingSystem.module.css';

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
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input type="email" id="email" className={styles.formInput} placeholder="Enter your email" />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/94f32685c7802a41c4bc51005cf2d9189ceacc0c9e26c9241a983504a589f4c7?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.newsletterBackground} />
    </section>
  );
};

export default Newsletter;