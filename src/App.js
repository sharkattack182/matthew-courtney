import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Body from './components/Main/body'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App">
    <Row >
      <div className="col-xs-12"><Sidebar /></div>
    </Row>
  
  <Body />
    </div>
  );
}

export default App;
