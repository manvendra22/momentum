import React from 'react';
import './Welcome.css';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonero } from '@fortawesome/free-brands-svg-icons';

const Welcome = props => (
  <div className="welcome">
    <FontAwesomeIcon className="icon" icon={faMonero} />
    {props.stage === 1 ? (
      <div className="section">
        <div className="greeting">Hello, what's your name?</div>
        <input
          type="text"
          className="focus"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.onNameAdded(e.target.value);
              e.target.value = null;
            }
          }}
        />
      </div>
    ) : null}

    {props.stage === 2 ? (
      <div className="section">
        <div className="greeting">What is your Email address?</div>
        <input
          type="text"
          className="focus"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.onEmailAdded(e.target.value);
              e.target.value = null;
            }
          }}
        />
        Or would you rather stay logged out?
        <button
          type="button"
          className="btn btn-secondary new-todo"
          onClick={() => {
            props.onSkipSignup();
          }}
        >
          Skip
        </button>
      </div>
    ) : null}

    {props.stage === 3 ? (
      <div className="section">
        <div className="greeting">Please enter a password.</div>
        <input
          type="password"
          className="focus"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.onPasswordAdded(e.target.value);
              e.target.value = null;
            }
          }}
        />
      </div>
    ) : null}
  </div>
);

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    password: state.password,
    stage: state.stage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameAdded: name => dispatch({ type: 'ADD_NAME', name }),
    onEmailAdded: email => dispatch({ type: 'ADD_EMAIL', email }),
    onSkipSignup: () => dispatch({ type: 'SKIP_SIGNUP' }),
    onPasswordAdded: password => dispatch({ type: 'ADD_PASSWORD', password })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
