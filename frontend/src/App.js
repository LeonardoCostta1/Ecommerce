import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Promo from './Components/Promo';
import {Provider} from 'react-redux'
import  store from './Store'
import {BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Menu/>
        <Promo/>
     
          <Routes/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
