// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import { PersonalInformation } from './components/PersonalInformation';
import { ContactInformation } from './components/ContactInformation';
import { SubmitForm } from './components/SubmitForm';
import Footer from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <PersonalInformation/>
        <ContactInformation/>
        <SubmitForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
