import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './Home'; // Example Home component
import BookLibrary from './BookLibrary/BookLibrary'; // Example BookLibrary component
import SignInPage from './Signin/SignInPage'
import SignUp from './SignUp/SignUp'
import PdfReader from './ReadeBook/PdfReader';


const HeroSection: React.FC = () => {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <Routes> {/* Wrap routes in Routes */}
        {/* Define routes with path and corresponding component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/book-library" element={<BookLibrary />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/read-ebook" element={<PdfReader />} />
      </Routes>
    </Router>
  );
};

export default HeroSection;
