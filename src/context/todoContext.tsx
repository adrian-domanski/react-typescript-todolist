import React, { createContext, useReducer } from "react";
import TodoReducer, { State, Actions } from "./reducers/todoReducer";

interface TodoContextInterface {
  todos: State;
  dispatch: React.Dispatch<Actions>;
}

export const TodoContext = createContext<TodoContextInterface>(undefined!);

const TodoContextProvider: React.FC = ({ children }) => {
  const initState: State = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos")!)
    : [];

  const [todos, dispatch] = useReducer(TodoReducer, initState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
