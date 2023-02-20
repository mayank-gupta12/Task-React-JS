import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: '30 px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);


