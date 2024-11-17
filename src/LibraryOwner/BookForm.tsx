import React from 'react';
import styles from './BookForm.module.css';
import { InputField } from './InputField';

interface BookFormProps {}

export const BookForm: React.FC<BookFormProps> = () => {
  return (
    <form className={styles.container}>
      <section className={styles.formSection}>
        <div className={styles.formatSelection}>
          <label htmlFor="bookFormat" className={styles.sectionTitle}>Choose a Book format:</label>
          <div className={styles.dropdown}>
            <select id="bookFormat" className={styles.dropdownValue}>
              <option>Choose a Book format</option>
            </select>
            <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/a819a5860a79b746c6f3cd6b829d5d29c2d8884cea526c376dfe491e7253a5b6?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.dropdownIcon} />
          </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/90b5fa97-8a0c-4918-b1b8-c99197e989aa?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Scan book" className={styles.scanIcon} />
      </section>
      
      <section className={styles.scanSection}>
        <p>Click here to scan your book:</p>
        <p className={styles.audioBookLabel}>Add Audio book:</p>
        <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/3fe71b76-0ae0-4ad2-92a6-e50338786d85?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="Add audio book" className={styles.audioIcon} />
      </section>
      
      <section className={styles.formFields}>
        <div className={styles.divider} />
        <InputField label="Add Title:" placeholder="Book title" />
        <InputField label="Add Author's name:" placeholder="Author's name" />
        <InputField label="Add ISBN-13:" placeholder="ISBN-13 code" />
        
        <div className={styles.overviewSection}>
          <div className={styles.overviewContainer}>
            <div className={styles.overviewLabelColumn}>
              <label htmlFor="overview" className={styles.overviewLabel}>Add Overview:</label>
            </div>
            <div className={styles.overviewInputColumn}>
              <textarea id="overview" className={styles.overviewInput} placeholder="Add overview here" />
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
export default BookForm;