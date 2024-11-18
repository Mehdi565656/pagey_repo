import React from 'react';
import styles from './BookClub.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input type="text" className={styles.searchInput} placeholder="Search" aria-label="Search" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cc5804ab56fe0a2dcd8c8609a12b1345c3877d8b2fa5e700e68b7307d31f37?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Action 1" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c04950ccac507541e7ee587cd22f6598e83a913443e30159a79e328dc0e3650d?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Action 2" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3dca0f62f3ce952666d0ab9ac5c06823123c6b6e0ba53d9778725a08161d18c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Action 3" className={styles.actionIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;