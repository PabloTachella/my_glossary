import React from "react";
import reactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from './routes/App'
import store from './store'
import './assets/styles/App.css'

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)