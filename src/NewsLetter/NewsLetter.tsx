import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>Stay updated with the latest releases and promotions</p>
      </div>
      <form className={styles.subscribeForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="emailInput" className={styles.inputLabel}>Email</label>
          <input type="email" id="emailInput" className={styles.emailInput} placeholder="Enter your email" required />
        </div>
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47eef3916f43edf9adfc6ba25308656ac847031bfc6c256f25accc3e4db415c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.sectionBackground} />
    </section>
  );
};

export default Newsletter;