import React from 'react';
import './Link.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faAppStore } from '@fortawesome/free-brands-svg-icons';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class Link extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <ButtonDropdown
        className="corner link-corner"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="toggle">Links</DropdownToggle>
        <DropdownMenu className="link-menu">
          <div>
            <FontAwesomeIcon icon={faChrome} />{' '}
            <a href="chrome://newtab">Chrome Tab</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faAppStore} />{' '}
            <a href="chrome://apps">Apps</a>
          </div>
          <div className="new-link">New Link</div>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
