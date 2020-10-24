import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        {/* <Route exact path="https://sharkattack182.github.io/matthew-courtney/" component={Welcome} />
        <Route exact path="https://sharkattack182.github.io/matthew-courtney/portfolio" component={Portfolio} /> */}
      </Router>

    </div>
  );
}

export default App;
