import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './Home'; // Example Home component
import BookLibrary from './BookLibrary/BookLibrary'; // Example BookLibrary component
import SignInPage from './Signin/SignInPage'
import SignUp from './SignUp/SignUp'
import UserProfile from './UserProfile/UserProfile'
import ClassicsPage from './ClassicsPage/ClassicsPage'
import BookProfile from './BookProfile/BookProfile'

const HeroSection: React.FC = () => {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <Routes> {/* Wrap routes in Routes */}
        {/* Define routes with path and corresponding component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/book-library" element={<BookLibrary />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/Classics" element={<ClassicsPage />} />
        <Route path="/book-profile" element={<BookProfile />} />
      </Routes>
    </Router>
  );
};

export default HeroSection;
