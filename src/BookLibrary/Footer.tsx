import React from 'react';
import styles from './BookLibrary.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© 2024 Pagey. All Rights Reserved</p>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li><a href="/privacy" className={styles.footerNavLink}>Privacy Policy</a></li>
            <li><a href="/contact" className={styles.footerNavLink}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;