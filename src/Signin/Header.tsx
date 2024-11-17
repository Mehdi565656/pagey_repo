import React from 'react';
import styles from './SignInPage.module.css';

const Header: React.FC = () => {
  const navItems = [
    'Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks',
    'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts'
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.userActions}>
          <form className={styles.searchForm} role="search">
            <label htmlFor="search" className={styles.visuallyHidden}>Search</label>
            <input type="search" id="search" className={styles.searchInput} placeholder="Search" />
            <button type="submit" className={styles.searchButton} aria-label="Submit search">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08929509878e10a610133339c7b5249869905f38d81364d31c5a9e8434c2c2a?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.searchIcon} />
            </button>
          </form>
          <button className={styles.iconButton} aria-label="User profile">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97912ab42c0bc71a14d9ea1b97bf0c97dfb5ea80766eb18c13d2fafb89107644?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.userIcon} />
          </button>
          <button className={styles.iconButton} aria-label="Notifications">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a14411436f1f1df6a183c08c0cba8d43624cb93d5090af66c799bb5d271a1ce8?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.notificationIcon} />
          </button>
          <button className={styles.iconButton} aria-label="Shopping cart">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2e0fa5fa9c45eddcda1867d829f4f063beebff5d56909f8fcdf9285d002ab3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.cartIcon} />
          </button>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a href="#" className={styles.navLink}>{item}</a>
            </li>
          ))}
        </ul>
        <a href="#" className={styles.navLink}>Music & Movies</a>
      </nav>
    </header>
  );
};

export default Header;