// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import CustomizedSteppers from './stepper/CustomizedSteppers';
import Footer from './components/Footer';
// Styles Imports
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <h1>Join Us</h1>
        <CustomizedSteppers/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
