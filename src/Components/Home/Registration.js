import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const FarmingRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    homeAddress: '',
    phone: '',
    identification: 'NIN',
    yearsInFarming: '',
    typeOfFarming: 'Irrigation',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    console.log('Collected Data:', formData);
    // You can send this data to a server or perform other actions here
  };

  return (
    <div>
      <h2>Farming Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="homeAddress">Home Address:</label>
        <input
          type="text"
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="identification">Type of Identification:</label>
        <select
          id="identification"
          name="identification"
          value={formData.identification}
          onChange={handleChange}
        >
          <option value="NIN">NIN</option>
          <option value="VoterCard">Voter Card</option>
          <option value="DriverLicence">Driver's License</option>
          <option value="InternationalPassport">International Passport</option>
        </select>
        <br />
        <br />

        <label htmlFor="yearsInFarming">Years in Farming:</label>
        <input
          type="number"
          id="yearsInFarming"
          name="yearsInFarming"
          value={formData.yearsInFarming}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="typeOfFarming">Type of Farming:</label>
        <select
          id="typeOfFarming"
          name="typeOfFarming"
          value={formData.typeOfFarming}
          onChange={handleChange}
        >
          <option value="Irrigation">Irrigation</option>
          <option value="Seasonal">Seasonal</option>
        </select>
        <br />
        <br />

        <button type="submit">Submit</button>
        

      </form>
      <br />
      <br />
      <Footer />
      <br />
    </div>
  );
};

export default FarmingRegistrationForm;
