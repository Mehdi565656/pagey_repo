import React from 'react';
import styles from './SignInPage.module.css';
import Header from './Header';
import SignInForm from './SignInForm';
import Newsletter from './Newsletter';
import Footer from './Footer';

const SignInPage: React.FC = () => {
  return (
    <main className={styles.signInPage}>
      <Header />
      <SignInForm />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default SignInPage;