import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AppContainer from "./Components/AppContainer";
import { Provider } from "./Context/Context";

export default function App() {
  return (
    <Provider>
      <AppContainer />
    </Provider>
  );
}
