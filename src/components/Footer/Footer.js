import React from 'react';
import Setting from './Setting/Setting';
import Todo from './Todo/Todo';
import './Footer.css';

import { connect } from 'react-redux';

const Footer = props => (
  <div className="footer-container">
    <div className="footer">
      <Setting />
      {!props.showQuote ? null : (
        <p className="quote text">
          “A ship in harbor is safe — but that is not what ships are built for.”
        </p>
      )}
      <Todo />
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    showQuote: state.showQuote
  };
};

export default connect(
  mapStateToProps,
  null
)(Footer);
