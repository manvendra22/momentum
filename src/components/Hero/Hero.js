import React from 'react';
import './Hero.css';

export default () => (
  <div className="section">
    <div className="time">16:30</div>
    <div className="greeting">Good afternoon, Manven</div>
    <div className="question">What is your main focus for today?</div>
    <input type="text" className="focus" />
  </div>
);
