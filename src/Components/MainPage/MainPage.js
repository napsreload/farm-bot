import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer';

function MainPage() {
  return (
    <div>
      <h2>WELCOME TO FARM-BOT YOUR FAVORITE GUIDE </h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/crop">Crop</Link>
          </li>
          <li> 
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/specialist">Specialist</Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default MainPage;
