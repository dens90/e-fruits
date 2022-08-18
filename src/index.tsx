import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./states/cartSlice";
import { Provider } from "react-redux";
import userReducer from "./states/usersSlice";

const reducer = combineReducers({
  cart: cartReducer,
  users: userReducer,
});

const store = configureStore({
  reducer,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
