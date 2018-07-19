import React from 'react';
import './Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { connect } from 'react-redux';

const Todo = props => (
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
        <div className="todo-header">{props.todoList.length} TO DO</div>
        <div className="todo-main">
          {props.todoList.length ? (
            props.todoList.map((todo, i) => (
              <div key={todo}>
                <input type="checkbox" /> {todo}
                <FontAwesomeIcon
                  className="icon"
                  icon={faTimesCircle}
                  onClick={() => {
                    props.onTodoRemoved(i);
                  }}
                />
              </div>
            ))
          ) : (
            <div>
              <div> No todos yet </div>
              <div> Add a todo to get started </div>
              <button>New Todo</button>
            </div>
          )}
        </div>
        <div className="todo-footer">
          <input
            type="text"
            className="focus2"
            placeholder="New Todo"
            onKeyPress={e => {
              if (e.key === 'Enter') {
                props.onTodoAdded(e.target.value);
                e.target.value = null;
              }
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoAdded: todo => dispatch({ type: 'ADD_TODO', todo }),
    onTodoRemoved: i => dispatch({ type: 'REMOVE_TODO', i })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
