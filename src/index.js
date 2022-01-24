import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import store, {Persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
