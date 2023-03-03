import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div>
      <h3 className="text-lg font-bold mb-2 text-cyan-600">Todo Input</h3>

      <div className="container border border-gray-300 rounded-md">
        <form
          className="flex flex-col items-center p-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="border rounded-lg border-gray-300 w-full p-3"
            onChange={changeHandler}
            value={todo}
          />
          <button
            type="submit"
            className="btn bg-cyan-600 text-white rounded-lg py-2 w-full  mt-3"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
