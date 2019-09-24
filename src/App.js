import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Sabbir" bName="সাব্বির">
        <button>Click</button>
      </Greet>
      <Greet name="Ahmed" bName="আহমদ"/>
      <Greet name="Shawon" bName="শাওন"/>
      <Welcome name="Sabbir" bName="সাব্বির"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
