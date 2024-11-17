import React from 'react';
import styles from './BookLibrary.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.searchContainer}>
          <form className={styles.searchForm}>
            <label htmlFor="searchInput" className={styles.visuallyHidden}>Search</label>
            <input type="text" id="searchInput" className={styles.searchInput} placeholder="Search" />
            <button type="submit" className={styles.searchButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c55ff1b30475e45e1df5c03cbcb17b7ac6300056e0c9fde47296b68889234f6c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
            </button>
          </form>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9094723f26114c63ed3cf4f8a4bb8126128f7d8734cdde25522627f29c645b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.userIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d2d5befade69e4141a148cc6d7390bb5ff3230f3593fec051440228631765b?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Notifications" className={styles.notificationIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2098248ccedde358b8db7bf8a175c6a90b93187051209281d8e32c1d58189e04?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Cart" className={styles.cartIcon} />
        </div>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          <li><a href="#books" className={styles.navItem}>Books</a></li>
          <li><a href="#fiction" className={styles.navItem}>Fiction</a></li>
          <li><a href="#nonfiction" className={styles.navItem}>Nonfiction</a></li>
          <li><a href="#ebooks" className={styles.navItem}>eBooks</a></li>
          <li><a href="#audiobooks" className={styles.navItem}>Audiobooks</a></li>
          <li><a href="#teens" className={styles.navItem}>Teens & YA</a></li>
          <li><a href="#kids" className={styles.navItem}>Kids</a></li>
          <li><a href="#toys" className={styles.navItem}>Toys & Games</a></li>
          <li><a href="#stationery" className={styles.navItem}>Stationery & Gifts</a></li>
          <li><a href="#music" className={styles.navItem}>Music & Movies</a></li>
        </ul>
      </nav>
      <div className={styles.heroSection}>
        <h2 className={styles.heroTitle}>What do you want to read today?</h2>
        <button className={styles.filterButton}>Filter BY</button>
      </div>
    </header>
  );
};

export default Header;