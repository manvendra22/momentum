import React from 'react';
import Setting from './Setting/Setting';
import Todo from './Todo/Todo';
import './Footer.css';

export default () => (
  <div className="footer">
    <Setting />
    <p className="quote text">
      “A ship in harbor is safe — but that is not what ships are built for.”
    </p>
    <Todo />
  </div>
);
