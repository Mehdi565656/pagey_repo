import React from 'react';
import styles from './TradingSystem.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h2 className={styles.logo}>Pagey</h2>
        <div className={styles.headerActions}>
          <div className={styles.searchContainer}>
            <input type="search" className={styles.searchInput} placeholder="Search" aria-label="Search" />
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/277781ab0f03bccbeacbb971c3630219e1cdb64084eb0b0affcc935c7e9eab47?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.searchIcon} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/4a130fe1f7c2b1c09d8b59df1cd45a663c483f84ba7528d92abe520d3df3d9ec?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="User profile" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/a2fdbc7252e5af91a5b4376993a4691456019aed5f03be545ba4e79f0bbd8e63?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Notifications" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/9e729cfc68f1b267b562fa74b891844346a560c323fbee0a23e63dbd3a8bfddb?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Settings" className={styles.actionIcon} />
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {['Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks', 'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts'].map((item, index) => (
            <li key={index} className={styles.navItem}>{item}</li>
          ))}
        </ul>
        <div className={styles.navItem}>Music & Movies</div>
      </nav>
    </header>
  );
};

export default Header;