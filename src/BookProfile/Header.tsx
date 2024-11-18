import React from 'react';
import styles from './BookDetails.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.headerActions}>
          <form className={styles.searchForm} role="search">
            <label htmlFor="search" className={styles.visuallyHidden}>Search</label>
            <input type="search" id="search" className={styles.searchInput} placeholder="Search" />
            <button type="submit" className={styles.searchButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.searchIcon} />
            </button>
          </form>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cc5804ab56fe0a2dcd8c8609a12b1345c3877d8b2fa5e700e68b7307d31f37?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.headerIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf9c8b08f1f9afc0f7521d1820f2248d70d0a4bf6186a06c77ad6c024e4015e4?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Notifications" className={styles.headerIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3dca0f62f3ce952666d0ab9ac5c06823123c6b6e0ba53d9778725a08161d18c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Settings" className={styles.headerIcon} />
        </div>
      </div>
      <nav className={styles.mainNav}>
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