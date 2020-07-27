import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

const AddTodoForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: name });
    setName("");
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Todo"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-info" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
