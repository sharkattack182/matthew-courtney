import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/portfolio" component={Portfolio} />
    </div>
  );
}

export default App;
