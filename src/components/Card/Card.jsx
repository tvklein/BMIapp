// Card.jsx
import React, { useState } from 'react';
import './Card.css'; // Import CSS file

const Card = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; 
      const bmiValue = (weight / (heightInMeters * heightInMeters));
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="card">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className="result">
          <h3>BMI Result:</h3>
          <p>{bmi}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
