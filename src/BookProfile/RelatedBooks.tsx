import React from 'react';
import styles from './BookDetails.module.css';

const RelatedBooks: React.FC = () => {
  const relatedBooks = [
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8357a469a3562c657592c77c2d3175d235000120389586230f3b7b35f52de6de?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Related Book 1" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Related Book 2" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93ff872180efcb8ca5fbf4bc6454ad7d2131741effad57d854b1f3b34d1e2f35?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Related Book 3" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/458445564ac1dbcfd6a627e1be9ec9b7c722239cd3fe142cdff2a8e8443b6ff5?placeholderIfAbsent=true&apiKey=c06234bf7af94025a702ef198e05be67", title: "Related Book 4" }
  ];

  return (
    <section className={styles.relatedBooks}>
      <h3 className={styles.sectionTitle}>You May Also Like</h3>
      <div className={styles.bookGrid}>
        {relatedBooks.map((book, index) => (
          <div key={index} className={styles.bookCard}>
            <img src={book.imgSrc} alt={book.title} className={styles.bookImage} />
            <p className={styles.bookTitle}>{book.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedBooks;