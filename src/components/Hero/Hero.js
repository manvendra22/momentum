import React from 'react';
import './Hero.css';

export default () => (
  <div className="container">
    <div className="section">
      <div className="time text">16:30</div>
      <div className="greeting text">Good afternoon, Madar</div>
      <div className="question text">What is your main focus for today?</div>
      <input type="text" className="focus" />
    </div>
  </div>
);
