import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Pizza from './components/Pizza';
import Confirmed from './components/Confirmed';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path='/pizza/confirmed'>
          <Confirmed a/>
        </Route>
        
        <Route path='/pizza'>
          <Pizza />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
