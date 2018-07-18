import React from 'react';
import './Todo.css';

export default () => (
  <div className="dropup show todo corner">
    <div
      className="corner-text"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span>Todo</span>
    </div>
    <div
      className="dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMenuLink"
    >
      <div>
        <div className="todo-header">5 TO DO</div>
        <div className="todo-main">
          <div>
            <input type="checkbox" /> Express Boilerplate
          </div>
          <div>
            <input type="checkbox" /> CSS Positioning
          </div>
          <div>
            <input type="checkbox" /> React or Vue
          </div>
          <div>
            <input type="checkbox" /> Hate Angular
          </div>
          <div>
            <input type="checkbox" /> CSS3
          </div>
        </div>
        <div className="todo-footer">
          <input type="text" className="focus2" placeholder="New Todo" />
        </div>
      </div>
    </div>
  </div>
);
