import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



<BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    <ToastContainer
      position="top-center" // Set the position to top-center
      autoClose={3000} // Optional: Set the autoClose time in milliseconds
    />
  </BrowserRouter>

 
  
 

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

