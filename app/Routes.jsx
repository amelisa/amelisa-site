import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import Root from './pages/Root';
import Docs from './pages/Docs';
import Home from './pages/Home';

let Routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={Home}/>
    <Route path='/docs' component={Docs}>
      <Route path=':section' component={Docs}/>
    </Route>
  </Route>
)

export default Routes;
