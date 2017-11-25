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
      <ConnectedRouter history={history}>
        <App>
          <Route exact path="/" component={List}/>
          <Route path="/list" component={List}/>
          <Route path="/stops/:id" component={Stop}/>
        </App>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// <Route exact path="/map" component={Map} />
// <Route exact path="/favorites" component={Favorites} />
