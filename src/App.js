// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import {useState, useLayoutEffect } from 'react';


import  Main from './components/Main';

import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  { configureStore } from './redux/configureStore'
import CustomRouter from './CustomRouter';

const store = configureStore();
const history = createBrowserHistory();
const HistoryContext = React.createContext('history');

class App extends Component {
  
  render() {
    // configureStore.subscribe(() => // console.log(configureStore.getState()))
    // // console.log("Store", store.getState());
    return (
      <Provider store={store}>
        <CustomRouter history={history}>
        <div className="App">
          <Main history={history} />

          
        </div>
        </CustomRouter>
        <BrowserRouter>
        
          {/* <HistoryContext.Provider value={history} > */}
          
          {/* </HistoryContext.Provider> */}
        
        </BrowserRouter>
      </Provider>
    );
  }
  
}


export default App;
