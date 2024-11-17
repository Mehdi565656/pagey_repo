import React from 'react';
import styles from './ClassicsPage.module.css';

const navItems = [
  'Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks',
  'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts', 'Music & Movies'
];

const Navigation: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href="#" className={styles.navLink}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;