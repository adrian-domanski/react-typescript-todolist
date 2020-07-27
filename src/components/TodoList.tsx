import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import AddTodoForm from "./AddTodoForm";

const TodoList: React.FC = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const handleCompleteTask = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="container">
      <section className="section has-text-centered">
        <h1 className="title is-size-2">TodoList</h1>
        <AddTodoForm />
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="is-size-3"
              style={{ color: todo.completed ? "green" : "red" }}
              onClick={() => handleCompleteTask(todo.id)}
            >
              {todo.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
