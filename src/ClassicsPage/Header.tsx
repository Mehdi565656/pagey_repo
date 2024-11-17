import React from 'react';
import styles from './ClassicsPage.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Pagey</h1>
      <div className={styles.headerActions}>
        <form className={styles.searchForm} role="search">
          <label htmlFor="search" className={styles.visuallyHidden}>Search</label>
          <input type="search" id="search" className={styles.searchInput} placeholder="Search" />
          <button type="submit" className={styles.searchButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d4c11d38b71ead306237eac7fdd7df029444878398ced2f9ecfe4fee44e881?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Search" className={styles.searchIcon} />
          </button>
        </form>
        <nav className={styles.iconNav}>
          <a href="#" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec265c777316e5c3d90c1a36f7c414503c72db88f4ad4f3eee2e023c80ef397?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="User profile" className={styles.icon} />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3077e90ecd49fedd770cc17bb009bdcc4b8b9df7086090b57344a8167dbc580?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Wishlist" className={styles.icon} />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2098248ccedde358b8db7bf8a175c6a90b93187051209281d8e32c1d58189e04?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="Shopping cart" className={styles.icon} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;