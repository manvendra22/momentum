import React from 'react';
import Link from './Link/Link';
import Weather from './Weather/Weather';
import Navbar from './Navbar';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

const Header = props => (
  <div className="header">
    {!props.showBookmarks ? null : <Navbar />}
    <Link />
    {!props.showSearch ? null : (
      <FontAwesomeIcon
        style={{ 'margin-top': '2rem', 'font-size': '2rem' }}
        icon={faSearch}
      />
    )}
    <Weather />
  </div>
);

const mapStateToProps = state => {
  return {
    showBookmarks: state.showBookmarks,
    showSearch: state.showSearch
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
