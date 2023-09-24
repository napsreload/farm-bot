import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router


function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Create a navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
    // For example, sending a POST request to your server for user registration

    // Assuming successful registration, redirect to the Dashboard component
    navigate('/Registration'); // Use navigate to change the route

    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
