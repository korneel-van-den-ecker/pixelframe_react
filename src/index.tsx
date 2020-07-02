import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './components/store'
//import WebSocketProvider, { WebSocketContext } from '../src/components/components/Websocket'
import {SocketService} from '../src/components/components/SocketService'
import {SocketContext} from '../src/components/components/SocketContext'

const pf = new SocketService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <SocketContext.Provider value={pf}>
      <App />
      </SocketContext.Provider>      
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
