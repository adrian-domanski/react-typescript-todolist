import { v4 as uuidv4 } from "uuid";

export type State = Todo[];
type Todo = {
  name: string;
  completed: boolean;
  id: string;
};

export type Actions =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: string };

export default (state: State, action: Actions) => {
  switch (action.type) {
    case "ADD_TODO":
      const stateAfterAdd: State = [
        ...state,
        { name: action.payload, completed: false, id: uuidv4() },
      ];
      localStorage.setItem("todos", JSON.stringify(stateAfterAdd));
      return stateAfterAdd;
    case "REMOVE_TODO":
      const stateAfterRemove: State = state.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(stateAfterRemove));
      return stateAfterRemove;
    default:
      return state;
  }
};
