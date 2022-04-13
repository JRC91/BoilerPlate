import React from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import store from '../store/'
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'


render(
  <Provider store={store} >
  <Router>
  <Routes />
  </Router>
  </Provider>,
  document.getElementById('ReactApp')
)
