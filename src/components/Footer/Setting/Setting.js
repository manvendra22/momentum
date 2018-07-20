import React from 'react';
import './Setting.css';
import './toggle.css';

import Toggle from 'react-toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import { connect } from 'react-redux';

class Setting extends React.Component {
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
        className="corner"
        direction="up"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="toggle">
          <FontAwesomeIcon icon={faCog} />
        </DropdownToggle>
        <DropdownMenu className="setting-menu">
          <div className="setting-container">
            <div className="setting-side">
              <div className="side-heading">General</div>
              <div className="side-heading">Todo</div>
              <div className="side-heading">Photos</div>
              <div className="side-heading">Quotes</div>
              <div className="side-heading">Links</div>
              <div className="side-heading">Balance</div>
              <div className="side-heading">Help</div>
              <div className="side-heading">What's New</div>
              <div className="side-heading">About</div>
              <div className="side-heading">Upgrade to Plus</div>
              <div className="side-heading">Log In</div>
            </div>
            <div className="setting-main">
              <div className="side-content">
                <div className="main-heading">General</div>
                <div className="small-heading">Customize your dashboard</div>
              </div>
              <div className="side-content heading">SHOW</div>
              <div className="side-content">
                Links
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showLinks}
                    onChange={this.props.onUpdatedShowLinks}
                  />
                </span>
              </div>
              <div className="side-content">
                Bookmarks Bar
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showBookmarks}
                    onChange={this.props.onUpdatedShowBookmarks}
                  />
                </span>
              </div>
              <div className="side-content">
                Search
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showSearch}
                    onChange={this.props.onUpdatedShowSearch}
                  />
                </span>
              </div>
              <div className="side-content">
                Weather
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showWeather}
                    onChange={this.props.onUpdatedShowWeather}
                  />
                </span>
              </div>
              <div className="side-content">
                Focus
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showFocus}
                    onChange={this.props.onUpdatedShowFocus}
                  />
                </span>
              </div>
              <div className="side-content">
                Quote
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showQuote}
                    onChange={this.props.onUpdatedShowQuote}
                  />
                </span>
              </div>
              <div className="side-content">
                Todo
                <span className="side-toggle">
                  <Toggle
                    defaultChecked={this.props.showTodo}
                    onChange={this.props.onUpdatedShowTodo}
                  />
                </span>
              </div>
              <div className="side-content large-height">
                <div>Countdown</div>
                <span className="side-toggle">
                  <Toggle />
                </span>
                <div className="small-heading">
                  Countdown to important dates
                </div>
              </div>
              <div className="side-content large-height">
                <div>Notes</div>
                <span className="side-toggle">
                  <Toggle />
                </span>
                <div className="small-heading">
                  Take quick notes and store wisdom to review
                </div>
              </div>
              <div className="side-content heading">CUSTOMIZE</div>
              <div className="side-content">
                Theme
                <span className="side-toggle small-heading">
                  Dark | Light | Custom
                </span>
              </div>
              <div className="side-content large-height">
                Font
                <span className="side-toggle small-heading">
                  Clssic | Modern | Startup | Retro | Warehouse | Quircky
                </span>
              </div>
              <div className="side-content heading">OPTIONS</div>
              <div className="side-content">
                Clock format<span className="side-toggle small-heading">
                  12 hour | 24 hour
                </span>
              </div>
              <div className="side-content">
                <div>Percent Clock</div>
                <span className="side-toggle">
                  <Toggle />
                </span>
                <div className="small-heading">
                  Visualize your progression through the work day
                </div>
              </div>
              <div className="side-content">
                Search Provider<span className="side-toggle small-heading">
                  Google | Bing
                </span>
              </div>
              <div className="side-content tip">
                <div>Tip</div>
                <div className="small-heading">
                  Many items in Momentum can be edited by double clicking on
                  them, including: your name, the clock, and to-dos
                </div>
              </div>
            </div>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLinks: state.showLinks,
    showBookmarks: state.showBookmarks,
    showSearch: state.showSearch,
    showWeather: state.showWeather,
    showFocus: state.showFocus,
    showQuote: state.showQuote,
    showTodo: state.showTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatedShowLinks: () => dispatch({ type: 'UPDATE_SHOW_LINKS' }),
    onUpdatedShowBookmarks: () => dispatch({ type: 'UPDATE_SHOW_BOOKMARKS' }),
    onUpdatedShowSearch: () => dispatch({ type: 'UPDATE_SHOW_SEARCH' }),
    onUpdatedShowWeather: () => dispatch({ type: 'UPDATE_SHOW_WEATHER' }),
    onUpdatedShowFocus: () => dispatch({ type: 'UPDATE_SHOW_FOCUS' }),
    onUpdatedShowQuote: () => dispatch({ type: 'UPDATE_SHOW_QUOTE' }),
    onUpdatedShowTodo: () => dispatch({ type: 'UPDATE_SHOW_TODO' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
