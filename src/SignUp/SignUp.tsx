import React from 'react';
import Header from './Header';
import CreateAccount from './CreateAccount';
import Newsletter from './Newsletter';
import Footer from './Footer';

const SignUp: React.FC = () => {
  

  return (
    <div>
      <Header/>
      <main>
        <CreateAccount />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;