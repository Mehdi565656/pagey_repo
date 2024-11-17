import React from 'react';
import styles from './UserProfile.module.css';

interface BookProps {
  imageUrl: string;
  title: string;
}

const Book: React.FC<BookProps> = ({ imageUrl, title }) => (
  <div className={styles.book}>
    <img src={imageUrl} alt={title} className={styles.bookCover} />
    <p className={styles.bookTitle}>{title}</p>
  </div>
);

const SavedBooks: React.FC = () => {
  const books = [
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Book 1" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/93ff872180efcb8ca5fbf4bc6454ad7d2131741effad57d854b1f3b34d1e2f35?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Book 2" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Book 3" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Book 4" },
  ];

  return (
    <section className={styles.savedBooks}>
      <h2 className={styles.sectionTitle}>Saved Books</h2>
      <div className={styles.bookGrid}>
        <div className={styles.bookColumn}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8357a469a3562c657592c77c2d3175d235000120389586230f3b7b35f52de6de?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.decorativeIcon} />
          {books.slice(0, 2).map((book, index) => (
            <Book key={index} imageUrl={book.imageUrl} title={book.title} />
          ))}
        </div>
        <div className={styles.bookColumn}>
          {books.slice(2, 4).map((book, index) => (
            <Book key={index} imageUrl={book.imageUrl} title={book.title} />
          ))}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/980cd6eb80ab9c3df0e4b3f4ba8f182774e1bf5bb492a3e63f0747a30a47a73c?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67" alt="" className={styles.decorativeIcon} />
        </div>
      </div>
    </section>
  );
};

export default SavedBooks;