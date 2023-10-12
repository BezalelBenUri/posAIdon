import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className = "landing-page" style = {{backgroundImage: "url('./images/earth.jpeg')"}}>
      <div className = "hero">
        <h1>Welcome to Bathymetry Predictor</h1>
        <p>Your solution for accurate water depth predictions.</p>
        <button className = "get-started-button">Get Started</button>
      </div>

      <div className = "features">
        <div className = "feature">
          <img src = {process.env.PUBLIC_URL + '../images/acc_pred1.jpg'} alt = "Feature 1" />
          <h2>Accurate Predictions</h2>
          <p>Utilize satellite data for precise bathymetry predictions.</p>
        </div>

        <div className = "feature">
          <img src = {process.env.PUBLIC_URL + '/images/sen_up.jpg'} alt = "Feature 2" />
          <h2>Easy Data Input</h2>
          <p>Upload your Sentinel-2 imagery effortlessly.</p>
        </div>

        <div className = "feature">
          <img src = {process.env.PUBLIC_URL + '/images/viz.jpg'} alt = "Feature 3" />
          <h2>Data Visualization</h2>
          <p>Explore bathymetry data through interactive visualizations.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
