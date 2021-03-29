import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import UserAuthProvider from "./components/Context/UserAuthProvider"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);