import React from 'react';
import styles from './StoreLocator.module.css';

const StoreLocator: React.FC = () => {
  return (
    <section className={styles.storeLocator}>
      <div className={styles.mapContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b17c7c41ff08e0ba3bc8fc8035bf4368908d48d191f705c7df29d90cccb2d5d0?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Map showing book store locations" className={styles.mapImage} />
        <div className={styles.locatorInfo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c373e77d902744930f38f210974560cdd3f84b91e159e7e12a8793c84cb2c58?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.locatorIcon} />
          <p className={styles.locatorText}>Locate the closest book store for a visit</p>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.sectionBackground} />
    </section>
  );
};

export default StoreLocator;