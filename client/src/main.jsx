import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-2kbn2pgjgqxb6ya0.us.auth0.com"
     clientId="uwhPYuw5d7OSlMqINdG6sp0Rnh44f5N5"
     authorizationParams={{
      redirect_uri: "https://xxhm-five.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
