import React from 'react';
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import DashboardPage from './components/DashboardPage';

import '../src/components/Footer.css'

function App() {
  return (
    <Router>
      <div className = "App">
        <Header/>
        <Routes>
          <Route path = "/" exact component = {LandingPage}/>
          <Route path = "dashboard" component = {DashboardPage}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
