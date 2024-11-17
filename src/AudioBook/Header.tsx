import React from 'react';
import styles from './AudioBookPage.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Pagey</h1>
      <div className={styles.headerActions}>
        <form className={styles.searchForm} role="search">
          <label htmlFor="search" className={styles.visuallyHidden}>Search</label>
          <input type="search" id="search" className={styles.searchInput} placeholder="Search" />
          <button type="submit" className={styles.searchButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
          </button>
        </form>
        <nav className={styles.iconNav}>
          <a href="#profile" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4fb0bc37175a6166150e078afe83b298811ea539123c787c468ae6be9cc41c0?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Profile" className={styles.navIcon} />
          </a>
          <a href="#notifications" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c086be4720555ad2ad3df11cb10451abf641e35191b2fc756c333176e95b10d3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Notifications" className={styles.navIcon} />
          </a>
          <a href="#settings" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3dca0f62f3ce952666d0ab9ac5c06823123c6b6e0ba53d9778725a08161d18c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Settings" className={styles.navIcon} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;