import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.logo}>
          <a href="#" className={styles.logo}>
            Pagey
            </a>
        </h1>
        <div className={styles.userActions}>
          <form className={styles.searchForm} role="search">
            <label htmlFor="searchInput" className={styles.visuallyHidden}>Search</label>
            <input type="search" id="searchInput" className={styles.searchInput} placeholder="Search" />
            <button type="submit" className={styles.searchButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/157131bb5cb1140c43a0b2e041e03237dd8b8f2a936759eecad80b97ca143452?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
            </button>
          </form>
          <button className={styles.iconButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/54eca844053b3614adc06bca7ab9c522c29209c0b6487e8477a0fa0416ec6187?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.userIcon} />
          </button>
          <button className={styles.iconButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c270436b62ac50a8b054f3d50292c7afac0df3bf6e0221c8e694b8909f90e4d?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Wishlist" className={styles.wishlistIcon} />
          </button>
          <button className={styles.iconButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2e0fa5fa9c45eddcda1867d829f4f063beebff5d56909f8fcdf9285d002ab3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Shopping cart" className={styles.cartIcon} />
          </button>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {['Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks', 'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts', 'Music & Movies'].map((item, index) => (
            <li key={index} className={styles.navItem}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.navLink}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;