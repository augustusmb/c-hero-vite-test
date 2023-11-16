import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const twilioToken = import.meta.env.VITE_TWILIO_AUTH_TOKEN;
const twilioAccountId = import.meta.env.VITE_TWILIO_ACCOUNT_SID;

console.log("Domain Here: ", domain);
console.log("Client Id Here: ", clientId);
console.log("Twilio Account SID Here: ", twilioAccountId);
console.log("Twilio Auth Token Here: ", twilioToken);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
