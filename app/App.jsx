import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import Routes from './Routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function onUpdate() {
  window.scrollTo(0, 0);
}

ReactDOM.render(
  <Router history={createBrowserHistory()} onUpdate={onUpdate}>
    {Routes}
  </Router>
, document.getElementById('app'));
