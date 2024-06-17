import InputText from "./components/InputText";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");

  const [isCompleted, setIsCompleted] = useState(false);
  let [todoItems, setTodoItems] = useState([]);
  const textInputHandler = (todoItem) => {
    setTodo(todoItem);
  };

  const addNewTodoItem = () => {
    let newTodo = {};
    newTodo = {
      id: uuidv4(),
      todo: todo,
      date: Date.now(),
      isCompleted: isCompleted,
    };

    setTodoItems([...todoItems, newTodo]);
  };

  const onFinishedHandler = (todo) => {
    todo.isCompleted = !todo.isCompleted;
    setIsCompleted(!isCompleted);
  };

  const onDeleteHandler = (index) => {
    todoItems.splice(index, 1);
    setTodoItems([...todoItems]);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="shadow-lg p-6 bg-white rounded-lg">
        <div className="flex justify-center mb-4">
          <h1 className="font-mono text-5xl text-gray-600">Todo App</h1>
        </div>
        <div className="flex mt-8 justify-center">
          <InputText textInputHandler={textInputHandler} />
          <button
            className="bg-[#3a71ca] rounded-md cursor-pointer px-7 mx-5 text-white shadow-[#3a71ca]  shadow-sm hover:shadow-md hover:shadow-[#3a71ca]"
            onClick={addNewTodoItem}
          >
            Save
          </button>
        </div>
        <table className="mt-5 ">
          <thead>
            <tr className="">
              <th className="border-b-2 border-gray-500 p-3">No.</th>
              <th className="border-b-2 border-gray-500 p-3">Task</th>
              <th className="border-b-2 border-gray-500 p-3">Status</th>
              <th className="border-b-2 border-gray-500 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoItems.map((element, index) => (
              <tr key={element.id} className="m-3 p-3 border-b border-gray-300">
                <td className="m-3 p-3">{index + 1}</td>
                <td className="m-3 p-3">{element.todo}</td>
                <td className="m-3 p-3">
                  {element.isCompleted ? "Finished" : "In Progress"}
                </td>
                <td className="m-3 p-3">
                  <div className="flex ">
                    <button
                      className="bg-[#dc4b64] rounded-md shadow-[#dc4b64]  cursor-pointer px-7 py-2 mx-1 ml-5 text-white shadow-sm hover:shadow-md hover:shadow-[#dc4b64]"
                      onClick={() => onDeleteHandler(index)}
                    >
                      DELETE
                    </button>
                    <button
                      className="bg-[#14a44d] rounded-md cursor-pointer px-7 mx-1 text-white shadow-[#14a44d]  shadow-sm hover:shadow-md hover:shadow-[#14a44d]"
                      onClick={() => onFinishedHandler(element)}
                    >
                      {element.isCompleted ? "UNFINISHED" : "FINISHED"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
