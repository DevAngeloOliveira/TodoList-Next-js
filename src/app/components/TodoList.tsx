import React, { useState } from "react";
import TodoItem, { Todo } from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import TodoFilter from "./TodoFilter";

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([
    // Initial tasks
    { id: 1, text: "Tarefa 1", completed: false },
    { id: 2, text: "Tarefa 2", completed: true },
  ]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Function to add a new task
  const addTask = (text: string, status: "active" | "completed") => {
    const newTask: Todo = {
      id: todos.length + 1,
      text: text,
      completed: status === "completed",
    };
    setTodos([...todos, newTask]);
  };

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTask = (id: number) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on the current filter
  const filteredTasks = todos.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Component rendering
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <AddTodoForm onAdd={addTask} />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        filterLabels={{
          all: "Todas",
          active: "Ativas",
          completed: "Concluídas",
        }}
      />
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          todo={task}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
