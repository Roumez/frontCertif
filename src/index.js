import React from 'react';
import ReactDOM from 'react-dom';
import { Web3Provider } from 'web3-hooks'
import Dapp from './Dapp'
import {Provider} from 'react-redux'
import store from './reducers/store'

ReactDOM.render(
  <React.StrictMode>
      <Web3Provider>
        <Provider store={store}>
          <Dapp />
        </Provider>,
      </Web3Provider>,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


