import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';

function Home() {
  const [isNewUser, setIsNewUser] = useState(null);

  const handleOptionClick = (isNew) => {
    setIsNewUser(isNew);
  };

  return (
    <div>
      <h2>Welcome to farm-Bot  Where all your farm questions are anwser</h2>
      <ul>
        <li onClick={() => setIsNewUser(true)}>SIGNUP</li>
        <li onClick={() => setIsNewUser(false)}>LOHIN</li>
      </ul>
      {isNewUser === null ? null : isNewUser ? <SignUp /> : <Login />}
  
      <Footer />

    </div>
  );
}

export default Home;
