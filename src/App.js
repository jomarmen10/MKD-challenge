import React from 'react';
import Form from './components/Form/Form';
import './App.css'


function App() {
  return (
    <div className="container">
      <div className="center">
        <div className="left">
        </div>
        <div className="right">
          <div className="form-container">
            <h1>Contact Form</h1>
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
