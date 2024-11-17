import React from 'react';
import styles from './UserProfile.module.css';
import Header from './Header';
import ProfileInfo from './ProfileInfo';
import LastVisited from './LastVisited';
import SavedBooks from './SavedBooks';
import Newsletter from './NewsLetter';
import Footer from './Footer';

const UserProfile: React.FC = () => {
  return (
    <div className={styles.userProfile}>
      <Header />
      <ProfileInfo />
      <LastVisited />
      <SavedBooks />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default UserProfile;