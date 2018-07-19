import React from 'react';
import './Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { connect } from 'react-redux';

import $ from 'jquery';

// $('document').ready(function() {
//   $('.dropdown-menu').on('click', function(e) {
//     console.log('jQuery', e.target.className);
//     if (!$(this).hasClass('new-todo')) {
//       e.stopPropagation();
//     }
//   });
// });

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
      className="dropdown-menu dropdown-menu-right dropdown-menu-form"
      // onClick={e => {
      //   console.log('React', e);
      //   e.stopPropagation();
      // }}
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
            <div className="no-todo">
              <div> No todos yet </div>
              <div> Add a todo to get started </div>

              {props.insertFlag ? null : (
                <button
                  type="button"
                  className="btn btn-secondary new-todo"
                  onClick={() => {
                    props.updateInsertFlag();
                  }}
                >
                  New Todo
                </button>
              )}
            </div>
          )}
        </div>
        {props.todoList.length || props.insertFlag ? (
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
        ) : null}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    insertFlag: state.insertFlag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoAdded: todo => dispatch({ type: 'ADD_TODO', todo }),
    onTodoRemoved: i => dispatch({ type: 'REMOVE_TODO', i }),
    updateInsertFlag: () => dispatch({ type: 'UPDATE_INSERT_FLAG' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
