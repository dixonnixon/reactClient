// import logo from './logo.svg';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';


import  Main from './components/Main';

import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import  { configureStore } from './redux/configureStore'


const store = configureStore();

class App extends React.Component {
  
  render() {
    // configureStore.subscribe(() => console.log(configureStore.getState()))
    // console.log("Store", store.getState());
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
  
}


export default App;
