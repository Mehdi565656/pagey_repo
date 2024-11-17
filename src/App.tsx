import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './Home'; // Example Home component
import BookLibrary from './BookLibrary/BookLibrary'; // Example BookLibrary component
import SignInPage from './Signin/SignInPage'

const HeroSection: React.FC = () => {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <Routes> {/* Wrap routes in Routes */}
        {/* Define routes with path and corresponding component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/book-library" element={<BookLibrary />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default HeroSection;
