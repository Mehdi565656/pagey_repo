import React from 'react';
import styles from './BookDetails.module.css';
import Header from './Header';
import BookInfo from './BookInfo';
import Overview from './Overview';
import Reviews from './Reviews';
import AuthorProductDetails from './AuthorProductDetails';
import RelatedBooks from './RelatedBooks';
import Newsletter from './Newsletter';
import Footer from './Footer';

const BookProfile: React.FC = () => {
  return (
    <main className={styles.bookProfile}>
      <Header />
      <BookInfo />
      <Overview />
      <Reviews />
      <AuthorProductDetails />
      <RelatedBooks />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default BookProfile;