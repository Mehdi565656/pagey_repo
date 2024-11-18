import React from 'react';
import styles from './BookForm.module.css';

interface InputFieldProps {
  label: string;
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.inputField}>
        <input type="text" placeholder={placeholder} className={styles.dropdownValue} />
        <img src="https://cdn.builder.io/api/v1/image/assets/aa44427859a843449abe1b5eddeb093b/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538?apiKey=aa44427859a843449abe1b5eddeb093b&" alt="" className={styles.dropdownIcon} />
      </div>
    </div>
  );
};