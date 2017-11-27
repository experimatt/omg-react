import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import store, { history } from './store';

import App from './components/App';
import List from './components/List';
import Map from './components/Map';
import Favorites from './components/Favorites';
import Stop from './components/Stop';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Route exact path="/" component={List}/>
          <Route path="/list" component={List}/>
          <Route path="/map" component={Map} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/stops/:id" component={Stop}/>
        </App>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
