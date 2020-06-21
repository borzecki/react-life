import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import GameOfLife from "./components/GameOfLife";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <GameOfLife />
  </Provider>,
  document.getElementById("root")
);