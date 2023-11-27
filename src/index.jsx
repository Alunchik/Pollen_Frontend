import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import LoginForm from "./pages/auth/LoginForm"
import RegistrationForm from "./pages/auth/RegistrationForm"

// const defaultState ={
//     cash:0,
// }
//

// const reducer = (state, action) =>{
//     switch (action.type){
//         case "ADD_CASH":
//             return {...state, cash: state.cash + action.payload}
//
//         case "GET_CASH":
//             return {...state, cash: state.cash - action.payload}
//
//         default:
//             return state
//     }
// }

// const store = createStore()

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

