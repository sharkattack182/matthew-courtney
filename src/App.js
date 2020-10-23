import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Body from './components/Main/body'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App">
 <Sidebar />
  
  <Body />
    </div>
  );
}

export default App;
