import React from 'react';
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';

import LoginPage from './components/LoginPage';

import '../src/components/Footer.css'

function App() {
  return (
      <Router>
        <div className = "App">
          <Header/>
          <Routes>
            <Route  path = "/" element = {<LandingPage />}/>
            <Route path = "/RegistrationPage" element = {<RegistrationPage />}/>
            <Route path = "/LoginPage" element = {<LoginPage />}/>
          </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
