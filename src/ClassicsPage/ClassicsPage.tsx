import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import BookGrid from './BookGrid.tsx';
import Pagination from './Pagination';
import Newsletter from './Newsletter';
import Footer from './Footer';
import styles from './ClassicsPage.module.css';

const ClassicsPage: React.FC = () => {
  return (
    <div className={styles.classicsPage}>
      <Header />
      <Navigation />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleLine}></span>
          Classics
          <span className={styles.titleLine}></span>
        </h1>
        <BookGrid />
        <Pagination />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ClassicsPage;