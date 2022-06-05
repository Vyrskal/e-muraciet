import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-manager/store";
import mongoose from "mongoose";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
// import express from "express";
// mongoose.connect(
//   keys.mongoURI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ).then(() => console.log("Connected to DB!"))
//   .catch((err) => console.log(err));
ReactDOM.render(
  <Auth0Provider
  domain="dev-jb0qow8z.us.auth0.com"
  clientId="TP9wuAB5FKBhtXQ8mTCQGIvqvJ5qjp8Z"
  redirectUri={`${window.location.origin}/appeal/`}
>

  <Provider store={store}>
  {/* <Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
