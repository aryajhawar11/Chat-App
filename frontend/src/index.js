import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


