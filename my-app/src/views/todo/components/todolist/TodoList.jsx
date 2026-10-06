import TodoBody from "../../../../components/TodoBody/TodoBody";
import TodoHeader from "../todoheader/Todoheader";
import TodoItem from "../todoitem/TodoItem";
import { useState } from "react";
import "./TodoList.css";

function TodoList({}) {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "Sample Todo Item", done: true },
  ]);

  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoItemFromList(todoItemId) {
    console.log(todoItemId);
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoItemId;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <div>
        {todos.map((todo) => (
          <TodoItem
            todoItem={todo}
            handleChangeCheckBox={handleChangeCheckbox}
            b={deleteTodoItemFromList}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
