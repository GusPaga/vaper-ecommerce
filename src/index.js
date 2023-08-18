import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={"Aguarda un momento"}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
