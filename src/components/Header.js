import React from 'react';
import Link from './Link';
import Weather from './Weather';
import './Header.css';

export default () => (
  <div className="header">
    <Link />
    <Weather />
  </div>
);
