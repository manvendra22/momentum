import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
