import React from 'react';
import styles from './ClassicsPage.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Stay updated with the latest releases and promotions
        </p>
        <form className={styles.newsletterForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input type="email" id="email" className={styles.emailInput} placeholder="Enter your email" required />
          </div>
          <button type="submit" className={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff059cb8d91eec415a117d8a81e08b9ab824e0c112932f9e617c8abbb7c7fd?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.newsletterBackground} />
    </section>
  );
};

export default Newsletter;