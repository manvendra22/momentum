import React from 'react';
import './Setting.css';

export default () => (
  <div className="dropup show setting corner">
    <div
      className="corner-text"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className="fas fa-cog" />
      Tiwari
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="setting-container">
        <div className="setting-side">
          <p>General</p>
          <p>Todo</p>
          <p>Photos</p>
          <p>Quotes</p>
          <p>Links</p>
          <p>Balance</p>
          <p>Help</p>
          <p>What's New</p>
          <p>About</p>
          <p>Upgrade to Plus</p>
        </div>
        <div className="setting-main">
          <p>General</p>
          <p>Todo</p>
          <p>Photos</p>
          <p>Quotes</p>
          <p>Links</p>
          <p>Balance</p>
          <p>Help</p>
          <p>What's New</p>
          <p>About</p>
          <p>Upgrade to Plus</p>
          <p>General</p>
          <p>Todo</p>
          <p>Photos</p>
          <p>Quotes</p>
          <p>Links</p>
          <p>Balance</p>
          <p>Help</p>
          <p>What's New</p>
          <p>About</p>
          <p>Upgrade to Plus</p>
        </div>
      </div>
    </div>
  </div>
);
