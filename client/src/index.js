import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Context from './store/Context';
import axios from 'axios'

axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>
);
