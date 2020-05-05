import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Promo from './Components/Promo';
import {Provider} from 'react-redux'
import  {store,persistor} from './Store'
import {BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
          <Menu/>
          <Promo/>
          <Routes/>
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
