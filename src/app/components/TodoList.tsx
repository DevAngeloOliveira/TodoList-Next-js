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
    <div className="w-full max-w-2xl mx-auto p-2 sm:p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-2 sm:mb-4">
        <AddTodoForm onAdd={addTask} />
      </div>
      <div className="mb-2 sm:mb-4">
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          filterLabels={{
            all: "Todas",
            active: "Ativas",
            completed: "Concluídas",
          }}
        />
      </div>
      <div className="space-y-1 sm:space-y-2">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            todo={task}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
