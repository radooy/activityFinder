import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import UserAuthProvider from "./components/Contexts/UserAuthProvider";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserAuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);