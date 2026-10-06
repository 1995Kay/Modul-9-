import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import "./TodoItem.css";

function TodoItem({ todoItem, handleChangeCheckBox, b }) {
  function handleDeleteTodoItem() {
    b(todoItem.id);
  }

  function handleChange(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckBox(updatedTodoItem);
  }
  const todoItemClassName =
    "todo-item " + (todoItem.done ? "todo-item-done" : "");

  return (
    <div className={todoItemClassName}>
      <Checkbox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleChangeCheckBox={handleChange}
      />
      <Button
        className="delete-button"
        buttonValue="Delete"
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}
export default TodoItem;
