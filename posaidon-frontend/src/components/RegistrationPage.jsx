import React, { useState } from 'react';

import './RegistrationPage.css';

function RegistrationPage() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here (e.g., sending data to the server)
  }

  const formBackgroundStyle = {
    backgroundImage: 'url("../images/acc_pred1.jpg")', // Replace with your image file path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Fixed background
    backgroundPosition: 'center center',
    minHeight: '100vh',
  };
  
  return (
    <div className = "registration-page" style = {formBackgroundStyle}>
      <div className = "registration-form">
        <h2>Sign Up</h2>
        <form onSubmit = {handleSubmit}>
          <div className = "form-group">
            <input
              type = "text"
              name = "firstName"
              value = {formData.firstName}
              onChange = {handleChange}
              placeholder = "First Name"
              required
            />
          </div>
          <div className = "form-group">
            <input
              type = "text"
              name = "lastName"
              value = {formData.lastName}
              onChange = {handleChange}
              placeholder = "Last Name"
              required
            />
          </div>
          <div className = "form-group">
            <input
              type = "email"
              name = "email"
              value = {formData.email}
              onChange = {handleChange}
              placeholder = "Email Address"
              required
            />
          </div>
          <div className = "form-group">
            <input
              type = "password"
              name = "password"
              value = {formData.password}
              onChange = {handleChange}
              placeholder = "Password"
              required
            />
          </div>
          <div className = "form-group">
            <input
              type = "password"
              name = "confirmPassword"
              value = {formData.confirmPassword}
              onChange = {handleChange}
              placeholder = "Confirm Password"
              required
            />
          </div>
          <button type = "submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
