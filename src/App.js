import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'


function App() {
  return (
    <div className="App">
 <Sidebar />
  
  <Portfolio />
    </div>
  );
}

export default App;
