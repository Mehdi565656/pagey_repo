import React from 'react';
import styles from './AudioBookPage.module.css';

const navItems = [
  { label: 'Books', href: '#books' },
  { label: 'Fiction', href: '#fiction' },
  { label: 'Nonfiction', href: '#nonfiction' },
  { label: 'eBooks', href: '#ebooks' },
  { label: 'Audiobooks', href: '#audiobooks' },
  { label: 'Teens & YA', href: '#teens-ya' },
  { label: 'Kids', href: '#kids' },
  { label: 'Toys & Games', href: '#toys-games' },
  { label: 'Stationery & Gifts', href: '#stationery-gifts' },
  { label: 'Music & Movies', href: '#music-movies' },
];

const Navigation: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href={item.href} className={styles.navLink}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;