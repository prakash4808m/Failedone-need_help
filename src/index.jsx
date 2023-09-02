import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './DataLayer/StateProvider';
import reducer, { initialState } from './DataLayer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialstate={initialState} reducer={reducer}  >
    <App />
  </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals.unregister();
