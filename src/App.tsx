import React from "react";
import TodoList from "./components/TodoList";
import "./utils/styles/main.scss";
import TodoContextProvider from "./context/todoContext";

const App: React.FC = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
