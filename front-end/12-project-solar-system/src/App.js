import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="background" />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
