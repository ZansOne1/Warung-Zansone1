import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import "./App.css";
import About from './component/About';
import Contact from './component/Contact';
import KeyFeatures from './component/Keyfeature';
class App extends Component {
  state = {}
  render() {
    return (

      <div>
        <Header />
        <Hero />
        <About />
        <KeyFeatures />
        <Contact />
        <Footer />
      </div>

    );
  }
}

export default App;