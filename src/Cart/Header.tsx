import React from 'react';
import styles from './ShoppingCart.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.logo}>Pagey</h1>
        <div className={styles.userActions}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b5b40aba4621a0073b906680ba6b9f6d90ce412341e822b75264afc580655ac?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.searchIcon} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0327e241fff9b8d47929dae0dd7a8a57d80a046f4349f9afbcc6d7c9f38d51b3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.userIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86e9ae2aebf85f86164f536fdcff5f4f8488daa2f6bfafa0fb74d04145243df3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Notifications" className={styles.notificationIcon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2e0fa5fa9c45eddcda1867d829f4f063beebff5d56909f8fcdf9285d002ab3?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Shopping cart" className={styles.cartIcon} />
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {['Books', 'Fiction', 'Nonfiction', 'eBooks', 'Audiobooks', 'Teens & YA', 'Kids', 'Toys & Games', 'Stationery & Gifts'].map((item) => (
            <li key={item} className={styles.navItem}>{item}</li>
          ))}
        </ul>
        <div className={styles.navItem}>Music & Movies</div>
      </nav>
    </header>
  );
};

export default Header;