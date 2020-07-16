import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import reduxStore from './data/redux/store';
import Main from './ui/pages/Main';

function App() {
  return (
    <Provider store={reduxStore}>
      <Main />
      <ToastContainer autoClose={2000} limit={1} pauseOnFocusLoss={false} />
    </Provider>
  );
}

export default App;
