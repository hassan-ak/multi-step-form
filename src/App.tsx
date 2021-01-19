// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import { PersonalInformation } from './components/PersonalInformation';
import Footer from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <PersonalInformation/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
