import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import TodoList from "./TodoList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
  rootElement
);
