import React from 'react';
import ReactDOM  from 'react-dom';

import store from './store/store.jsx';
import {Provider} from 'react-redux';

import {HashRouter} from 'react-router-dom';

import Page from './Page/Page.jsx';

const app = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Page/>
      </HashRouter>
  </Provider>
, app);