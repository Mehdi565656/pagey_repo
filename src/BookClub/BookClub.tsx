import React from 'react';
import styles from './BookClub.module.css';
import Header from './Header';
import Navigation from './Navigation';
import BookTitle from './BookTitle';
import ChatSection from './ChatSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const BookClub: React.FC = () => {
  return (
    <div className={styles.bookClub}>
      <Header />
      <Navigation />
      <BookTitle />
      <button className={styles.chatButton}>Hello</button>
      <ChatSection />
      <button className={styles.chatButton}>Sup</button>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default BookClub;