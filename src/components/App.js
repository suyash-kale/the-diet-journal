import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { BASE_PATH } from 'configs/index.js';
import Routes from 'components/Routes.jsx';

import 'scss/style.scss';

require('bootstrap');

class App extends Component {
  render() {
    return (
      <Router
        basename={BASE_PATH}>
        <Routes />
        <ToastContainer
          toastClassName={`toast-container`}
          position={'bottom-center'}
          autoClose={4000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable={false}
          pauseOnHover
        />
      </Router>
    );
  }
}

export default App;