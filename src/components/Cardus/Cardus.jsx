import React, { useState } from 'react';
import './Cardus.css'; 

const Cardus = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      // Calculate BMI directly using lbs and inches
      const bmiValue = (weight * 703) / (height * height);
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="card">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in lbs"
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Height (in):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in inches"
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

export default Cardus;