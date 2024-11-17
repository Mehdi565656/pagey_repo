import React from 'react';
import Header from './Header';
import SurveyForm from './SurveyForm';
import Newsletter from './Newsletter';
import Footer from './Footer';
import styles from './SurveyPage.module.css';

const SurveyPage: React.FC = () => {
  return (
    <div className={styles.surveyPage}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Sign up Survey</h1>
        <p className={styles.pageDescription}>For a more personalized experience</p>
        <SurveyForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default SurveyPage;