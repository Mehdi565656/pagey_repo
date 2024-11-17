import React from 'react';
import styles from './PdfReader.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input type="text" className={styles.searchInput} placeholder="Search" aria-label="Search" />
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/6f0c2f8cdf5fda8462c994fffb209af80fbedbdc51e1f2a6a146266117d3fa32?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Search" className={styles.searchIcon} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/4a130fe1f7c2b1c09d8b59df1cd45a663c483f84ba7528d92abe520d3df3d9ec?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Action 1" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/b0fa24ffc06226a25bf8843a0736f8d19653e8f78a4ea8e32094d3f55fed3216?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Action 2" className={styles.actionIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/9e729cfc68f1b267b562fa74b891844346a560c323fbee0a23e63dbd3a8bfddb?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Menu" className={styles.menuIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;