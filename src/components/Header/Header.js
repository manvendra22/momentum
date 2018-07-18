import React from 'react';
import Link from './Link/Link';
import Weather from './Weather/Weather';
import './Header.css';

export default () => (
  <div className="header">
    <Link />
    <Weather />
  </div>
);
