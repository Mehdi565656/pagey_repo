import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/6f0c2f8cdf5fda8462c994fffb209af80fbedbdc51e1f2a6a146266117d3fa32?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.searchIcon} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/4a130fe1f7c2b1c09d8b59df1cd45a663c483f84ba7528d92abe520d3df3d9ec?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="User profile" className={styles.profileIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/87a6c40ef006f73e9e2704aa738a7989553332affddc5d4b10870909d764a253?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Notifications" className={styles.notificationIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/9e729cfc68f1b267b562fa74b891844346a560c323fbee0a23e63dbd3a8bfddb?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Shopping cart" className={styles.cartIcon} />
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {['Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks', 'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts', 'Music & Movies'].map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a href="#" className={styles.navLink}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;