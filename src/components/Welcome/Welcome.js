import React from 'react';
import './Welcome.css';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonero } from '@fortawesome/free-brands-svg-icons';

const Welcome = props => (
  <div className="welcome">
    <FontAwesomeIcon className="icon" icon={faMonero} />
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
  </div>
);

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameAdded: name => dispatch({ type: 'ADD_NAME', name })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
