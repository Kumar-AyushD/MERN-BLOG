import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemProvider from "./components/ThemProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <React.StrictMode>
      <Provider store={store}>
        <ThemProvider>
          <App />
        </ThemProvider>
      </Provider>
    </React.StrictMode>
  </PersistGate>
);
