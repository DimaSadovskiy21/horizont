import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
);

reportWebVitals();
