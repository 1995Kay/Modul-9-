import Input from "../../../../components/input/input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import "./TodoHeader.css";

function TodoHeader({ addTodoItemToList }) {
  const [inpuitValue, setInputValue] = useState("");

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoItemEvent() {
    addTodoItemToList({ id: Math.random(), content: inpuitValue, done: false });
    setInputValue("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className="todo-header">
        <Input
          inpuitValue={inpuitValue}
          handleInputChangeEvent={handleInputChangeEvent}
        />
        <Button
          className="button"
          buttonValue={"Add"}
          handleButtonClickEvent={handleAddTodoItemEvent}
        />
      </div>
    </div>
  );
}
export default TodoHeader;
