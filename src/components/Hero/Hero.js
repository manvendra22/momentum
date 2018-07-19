import React, { Component } from 'react';
import './Hero.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { connect } from 'react-redux';

class Hero extends Component {
  state = {
    time: new Date().getHours() + ':' + new Date().getMinutes()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().getHours() + ':' + new Date().getMinutes()
    });
  }

  render() {
    return (
      <div className="section">
        <div className="time">{this.state.time}</div>
        <div className="greeting">Good afternoon, {this.props.name}</div>
        {this.props.focus ? (
          <div className="today-focus">
            <div>TODAY</div>
            <input type="checkbox" /> {this.this.props.focus}
            <FontAwesomeIcon
              className="icon"
              icon={faTimesCircle}
              onClick={() => {
                this.props.onFocusRemoved();
              }}
            />
          </div>
        ) : (
          <div>
            <div className="question">What is your main focus for today?</div>
            <input
              type="text"
              className="focus"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  this.props.onFocusAdded(e.target.value);
                  e.target.value = null;
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    focus: state.focus,
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameAdded: name => dispatch({ type: 'ADD_NAME', name }),
    onFocusAdded: focus => dispatch({ type: 'ADD_FOCUS', focus }),
    onFocusRemoved: () => dispatch({ type: 'REMOVE_FOCUS' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
