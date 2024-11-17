import React from 'react';
import styles from './ClassicsPage.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; 2024 Pagey. All Rights Reserved</p>
      <nav className={styles.footerNav}>
        <a href="#" className={styles.footerLink}>Privacy Policy</a>
        <a href="#" className={styles.footerLink}>Contact Us</a>
      </nav>
    </footer>
  );
};

export default Footer;