import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { FavouritesContextProvider } from "../src/components/store/favourites-context";

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById("root")
);
