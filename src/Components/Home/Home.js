import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';


const Home = () => {
  const [isNewUser, setIsNewUser] = useState(null);
const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/SignUp');
  };

  const handleLoginClick = () =>{
    navigate('/Login');
  };

  return (
    <div>
      <h2>Welcome to farm-Bot  Where all your farm questions are anwser</h2>
      <ul>
        <button onClick={() => setIsNewUser(true)}>SIGNUP</button>
        <button onClick={() => setIsNewUser(false)}>LOGIN</button>
      </ul>
      {isNewUser === null ? null : isNewUser ? <SignUp /> : <Login />}
  
      <Footer />

    </div>
  );
}

export default Home;
