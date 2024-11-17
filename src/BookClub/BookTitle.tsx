import React from 'react';
import styles from './BookClub.module.css';

const BookTitle: React.FC = () => {
  return (
    <>
      <div className={styles.bookTitle}>
        <div className={styles.titleDivider} />
        <h2 className={styles.titleText}>Jungle Book</h2>
        <div className={styles.titleDivider} />
      </div>
      <p className={styles.authorName}>by Mr.kesah</p>
    </>
  );
};

export default BookTitle;