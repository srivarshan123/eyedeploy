import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="cartoon 2.webp" alt="eye" />
        </div>
        <h2 className="name">Name: Srivarshan S</h2>
        <p className="registration">Registration No: 212221040163</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Additional details or content can go here...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;