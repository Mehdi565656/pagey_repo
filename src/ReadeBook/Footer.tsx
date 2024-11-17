import React from 'react';
import styles from './PdfReader.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© 2024 Pagey. All Rights Reserved</p>
        <a href="#" className={styles.privacyPolicy}>Privacy Policy</a>
        <a href="#" className={styles.contactUs}>Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;