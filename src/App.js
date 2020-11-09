import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Resume from './components/Resume/resume'
import Port1 from './components/Port1/port1'
import Port2 from './components/Port2/port2'
import Port3 from './components/Port3/port3'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/port1" component={Port1} />
        <Route exact path="/port2" component={Port2} />
        <Route exact path="/port3" component={Port3} />
      </Router>

    </div>
  );
}

export default App;
