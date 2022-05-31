// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';


import  Main from './components/Main';

import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
