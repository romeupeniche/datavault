import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter } from "react-router";
import RootApp from "./RootApp";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
