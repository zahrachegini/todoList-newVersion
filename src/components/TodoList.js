import React, { useState } from "react";
import {
  IoTrashBin,
  IoCheckboxOutline,
  IoPencilSharp,
  IoSearch,
} from "react-icons/io5";

const TodoList = () => {
  return (
    <div className="container py-5">
      <div>
        <h3 className="text-lg font-bold mb-4 text-cyan-600">TodoList</h3>
        <div className="flex items-center justify-center gap-5">
          <span className="border-2 border-cyan-600 text-cyan-600 rounded-3xl cursor-pointer transition-opacity duration-300 ease-linear hover:bg-cyan-600 hover:text-white w-28 py-2 font-bold">
            All
          </span>
          

          <span className="border-2 border-cyan-600 text-cyan-600 rounded-3xl cursor-pointer transition-opacity duration-300 ease-linear hover:bg-cyan-600 hover:text-white w-28 py-2 font-bold">
            Done
          </span>

          <span className="border-2 border-cyan-600 text-cyan-600 rounded-3xl cursor-pointer transition-opacity duration-300 ease-linear hover:bg-cyan-600 hover:text-white w-28 py-2 font-bold">
            Todo
          </span>
        </div>
      </div>

      <div className="flex justify-center"><div className="border border-gray-300 rounded-md md:w-[50%] w-full flex items-center justify-between p-3 mt-5">
        <input type="text" />
        <IoSearch className="text-gray-500 text-xl" />
      </div></div>

      <div>
        <div className="flex items-center justify-between px-8 py-3 border border-gray-300 rounded-md my-2">
          <span>First Todo</span>
          <div className="flex items-center justify-around gap-3">
            <IoCheckboxOutline className="text-green-600 text-2xl" />
            <IoPencilSharp className="text-orange-600 text-2xl" />
            <IoTrashBin className="text-red-700 text-2xl" />
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-3 border border-gray-300 rounded-md my-2">
          <span>First Todo</span>
          <div className="flex items-center justify-around gap-3">
            <IoCheckboxOutline className="text-green-600 text-2xl" />
            <IoPencilSharp className="text-orange-600 text-2xl" />
            <IoTrashBin className="text-red-700 text-2xl" />
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-3 border border-gray-300 rounded-md my-2">
          <span>First Todo</span>
          <div className="flex items-center justify-around gap-3">
            <IoCheckboxOutline className="text-green-600 text-2xl" />
            <IoPencilSharp className="text-orange-600 text-2xl" />
            <IoTrashBin className="text-red-700 text-2xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <button className="btn bg-red-600 text-white rounded-md py-3">
          Delete Done Tasks
        </button>
        <button className="btn bg-red-600 text-white rounded-md py-3">
          Delete All Tasks
        </button>
      </div>
    </div>
  );
};

export default TodoList;
