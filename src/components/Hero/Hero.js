import React from 'react';
import './Hero.css';

export default () => (
  <div className="container">
    <div className="section">
      <div className="time text">16:30</div>
      <p className="greeting text">Good afternoon, Madar</p>
      <p className="question text">What is your main focus for today?</p>
      <input type="text" className="focus" />
    </div>
  </div>
);
