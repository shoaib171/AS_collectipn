/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-jipymmfck0e3dnlr.us.auth0.com"
    clientId="qCCg69GkR1G8FN12hVO9hqyICHYO52Bk"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);

reportWebVitals();
