import React from 'react';
import styles from './UserProfile.module.css';

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
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c55ff1b30475e45e1df5c03cbcb17b7ac6300056e0c9fde47296b68889234f6c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
            </button>
          </form>
          <nav className={styles.userNav}>
            <a href="#" className={styles.userNavLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9094723f26114c63ed3cf4f8a4bb8126128f7d8734cdde25522627f29c645b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Notifications" className={styles.userNavIcon} />
            </a>
            <a href="#" className={styles.userNavLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d95362e15e140e1bf2614e2ad215d9a96f0500fc52a010dbabc2e78b640e6328?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Messages" className={styles.userNavIcon} />
            </a>
            <a href="#" className={styles.userNavLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2098248ccedde358b8db7bf8a175c6a90b93187051209281d8e32c1d58189e04?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.userNavIcon} />
            </a>
          </nav>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          {['Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks', 'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts', 'Music & Movies'].map((item, index) => (
            <li key={index} className={styles.mainNavItem}>
              <a href="#" className={styles.mainNavLink}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;