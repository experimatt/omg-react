import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import './styles/main.css';

import store, { history } from './store/store';
import App from './components/App';
import List from './components/List';
import Stop from './components/Stop';

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <ConnectedRouter history={history}>
      <Route path="/" component={App}>
        <Route path="list" component={List}/>
        <Route path="stop" component={Stop}/>
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


// <Route path="map" component={Map}/>
