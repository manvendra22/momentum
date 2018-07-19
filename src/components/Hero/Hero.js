import React from 'react';
import './Hero.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { connect } from 'react-redux';

const Hero = props => (
  <div className="section">
    <div className="time">16:30</div>
    <div className="greeting">Good afternoon, Manven</div>
    {props.focus ? (
      <div className="today-focus">
        <div>TODAY</div>
        <input type="checkbox" /> {props.focus}
        <FontAwesomeIcon
          className="icon"
          icon={faTimesCircle}
          onClick={() => {
            props.onFocusRemoved();
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
              props.onFocusAdded(e.target.value);
              e.target.value = null;
            }
          }}
        />
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    focus: state.focus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFocusAdded: focus => dispatch({ type: 'ADD_FOCUS', focus }),
    onFocusRemoved: () => dispatch({ type: 'REMOVE_FOCUS' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
