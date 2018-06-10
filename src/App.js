import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageSlider />
        <Footer />
      </div>
    );
  }
}

export default App;
