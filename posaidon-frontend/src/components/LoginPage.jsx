import React, { useState } from 'react';

import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
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
    <div className = "login-page" style = {formBackgroundStyle}>
      <div className = "login-form">
        <h2>Login</h2>
        <form onSubmit = {handleSubmit}>
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
          <button type = "submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;          