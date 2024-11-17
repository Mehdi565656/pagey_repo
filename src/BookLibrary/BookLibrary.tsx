import React from 'react';
import styles from './BookLibrary.module.css';
import Header from './Header';
import BookSection from './BookSection';
import TrendingSubjects from './TrendingSubjects';
import Newsletter from './Newsletter';
import Footer from './Footer';

const BookLibrary: React.FC = () => {
  return (
    <div className={styles.bookLibrary}>
      <Header />
      <BookSection title="The best books of 2024" />
      <BookSection title="Bestsellers" />
      <TrendingSubjects />
      <BookSection title="Best Reviewed" />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BookLibrary;