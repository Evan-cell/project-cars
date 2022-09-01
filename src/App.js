import React from 'react'
import './App.css';
import Access from './Components/Access';
import Home from './Components/Home';
import Models from './Components/Models';
import Modely from './Components/Modely';
import Roof from './Components/Roof';
import Solar from './Components/Solar';

function App() {
  return (
    <div className="App">
      <Home />
      <Modely />
      <Models />
      <Solar />
      <Roof />
      <Access />
    </div>
  );
}

export default App;
