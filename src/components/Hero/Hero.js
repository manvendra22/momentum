import React, { Component } from 'react';
import './Hero.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import { connect } from 'react-redux';

class Hero extends Component {
  state = {
    name: this.props.name,
    flag: false
  };

  componentDidMount() {
    setInterval(() => this.props.onUpdateTime(), 1000);
  }

  calcTime = () => {
    let hours = this.props.timeHours.toString();
    let minutes = this.props.timeMinutes.toString();
    let time = `${hours}:${minutes}`;

    if (hours.length === 1 && minutes.length === 1) {
      time = `0${hours}:0${minutes}`;
    } else if (hours.length === 1) {
      time = `0${hours}:${minutes}`;
    } else if (minutes.length === 1) {
      time = `${hours}:0${minutes}`;
    }

    return time;
  };

  getGreeting = () => {
    let hours = this.props.timeHours.toString();
    let greeting = 'morning';

    if (hours >= 16) {
      greeting = 'evening';
    } else if (hours >= 12) {
      greeting = 'noon';
    }

    return greeting;
  };

  render() {
    return (
      <div className="section">
        <div className="time">{this.calcTime()}</div>
        <div className="greeting">
          Good {this.getGreeting()}{' '}
          <span
            onDoubleClick={() => {
              this.setState({
                flag: true
              });
            }}
          >
            {this.state.flag ? (
              <input
                type="text"
                className="input-name"
                value={this.state.name}
                onChange={e => {
                  this.setState({
                    name: e.target.value
                  });
                }}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    this.setState({
                      flag: false
                    });
                  }
                }}
              />
            ) : (
              this.state.name
            )}
          </span>
        </div>
        {!this.props.showFocus ? null : this.props.focus ? (
          <div className="today-focus">
            <div>TODAY</div>
            <input type="checkbox" className="strikethrough" />
            <label>{this.props.focus}</label>
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
              className="input-focus"
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
    name: state.name,
    timeHours: state.timeHours,
    timeMinutes: state.timeMinutes,
    showFocus: state.showFocus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameAdded: name => dispatch({ type: 'ADD_NAME', name }),
    onFocusAdded: focus => dispatch({ type: 'ADD_FOCUS', focus }),
    onFocusRemoved: () => dispatch({ type: 'REMOVE_FOCUS' }),
    onUpdateTime: () => dispatch({ type: 'UPDATE_TIME' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
