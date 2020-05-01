import React from 'react';

import {Switch,Route} from 'react-router-dom'
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path='/cart'>
            <Cart/>
        </Route>
    </Switch>
  );
}
