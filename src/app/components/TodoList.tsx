import React, { useState } from "react";
import styled from "styled-components";
import TodoItem, { TodoItemProps } from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import TodoFilter from "./TodoFilter";

// Interface para a estrutura do item Todo
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Componente TodoList: Gerencia a lista de tarefas
const TodoList: React.FC = () => {
  // Estado para as tarefas e filtro
  const [todos, setTodos] = useState<Todo[]>([
    // Tarefas iniciais
    { id: 1, text: "Tarefa 1", completed: false },
    { id: 2, text: "Tarefa 2", completed: true },
  ]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Função para adicionar uma nova tarefa
  const addTodo = (text: string, status: "active" | "completed") => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: status === "completed",
    };
    setTodos([...todos, newTodo]);
  };

  // Função para alternar o status de conclusão da tarefa
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filtrar tarefas com base no filtro atual
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // ... retorno existente ...
  return (
    <TodoListContainer>
      <AddTodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
