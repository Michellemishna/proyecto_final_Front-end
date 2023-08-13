import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store/Store.js";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleCredential, urlsDeploy } from "./config";
//import { HashRouter } from "react-router-dom";
import axios from "axios";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = urlsDeploy.urlBack || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId={googleCredential.googleClientId}
        redirectUri= {urlsDeploy.urlFront}
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
