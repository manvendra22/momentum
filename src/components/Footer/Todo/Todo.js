import React from 'react';
import './Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { connect } from 'react-redux';

class Todo extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return !this.props.showTodo ? null : (
      <ButtonDropdown
        className="corner"
        direction="up"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="toggle">Todo</DropdownToggle>
        <DropdownMenu className="todo-menu">
          <DropdownItem header className="todo-header">
            {this.props.todoList.length} TO DO
          </DropdownItem>
          <div className="todo-main">
            {this.props.todoList.length ? (
              this.props.todoList.map((todo, i) => (
                <div key={todo}>
                  <input type="checkbox" className="strikethrough" />
                  <label>{todo}</label>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTimesCircle}
                    onClick={() => {
                      this.props.onTodoRemoved(i);
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="no-todo">
                <div> No todos yet </div>
                <div> Add a todo to get started </div>

                {this.props.insertFlag ? null : (
                  <Button
                    color="secondary"
                    onClick={() => {
                      this.props.onUpdateInsertFlag();
                    }}
                  >
                    New Todo
                  </Button>
                )}
              </div>
            )}
          </div>
          {this.props.todoList.length || this.props.insertFlag ? (
            <div className="todo-footer">
              <input
                type="text"
                className="input-todo"
                placeholder="New Todo"
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    this.props.onTodoAdded(e.target.value);
                    e.target.value = null;
                  }
                }}
              />
            </div>
          ) : null}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    insertFlag: state.insertFlag,
    showTodo: state.showTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoAdded: todo => dispatch({ type: 'ADD_TODO', todo }),
    onTodoRemoved: i => dispatch({ type: 'REMOVE_TODO', i }),
    onUpdateInsertFlag: () => dispatch({ type: 'UPDATE_INSERT_FLAG' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
