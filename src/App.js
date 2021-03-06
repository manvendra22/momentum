import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';

import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.stage !== 4 ? (
          <Welcome />
        ) : (
          <div>
            <Header />
            <Hero />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stage: state.stage
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
