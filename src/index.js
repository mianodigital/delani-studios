import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  // Configuration for routing in the project
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
