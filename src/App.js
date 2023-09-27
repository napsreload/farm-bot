import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Components/Home/Home';
import MainPage from './Components/MainPage/MainPage';
import SignUp from './Components/Home/SignUp';
import Login from './Components/Home/Login';
import About from './Components/MainPage/About'; 
import Contact from './Components/MainPage/Contact';
import Crop from './Components/MainPage/Crop'; 
import Market from './Components/MainPage/Market';  
import Specialist from './Components/MainPage/Specialist';
import Registration from './Components/Home/Registration'; 
import Footer from './Components/Home/Footer';


function App() {
  return (
        <div className="App">
           <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/dashboard" element={<MainPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crop" element={<Crop />} />
            <Route path= "/market" element={<Market />} />
            <Route path= "/specialist" element={<Specialist />} />
            <Route path= "/Registration" element={<Registration />} />
            <Route path= "/Footer" element={<Footer />} />
           </Routes>
        </div>
  );
}

export default App;

