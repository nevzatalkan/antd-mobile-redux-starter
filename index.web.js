import React, {
  Component
}
from 'react';
import {
  createStore,
  applyMiddleware,
  combineReducers
}
from 'redux';

import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {
  Provider
}
from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom'
import * as reducers from './reducers';
import WalltranApp from './containers/walltranApp';
import Login from './containers/Login';

import {
  connect
}
from 'react-redux';
import {
  bindActionCreators
}
from 'redux';
import * as loginActions from './actions/loginActions';

import {
  createForm
}
from 'rc-form'

const logger = createLogger();


const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const reducer = combineReducers(reducers );
const store = createStoreWithMiddleware(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <WalltranApp />
      </Provider>
    );
  }
}

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    loginActions: bindActionCreators(loginActions, dispatch)
  })
)(createForm()(App));

ReactDOM.render(<App />, document.getElementById('root'));
