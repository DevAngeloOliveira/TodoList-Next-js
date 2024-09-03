import React from "react";
import styled from "styled-components";

// Interface para a estrutura do item Todo
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TodoText = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#888" : "#333")};
`;

// Interface de props para o componente TodoItem
export interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
}

// Componente TodoItem: Renderiza um único item da lista de tarefas
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <ItemContainer>
      <Checkbox type="checkbox" checked={todo.completed} onChange={onToggle} />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
    </ItemContainer>
  );
};

export default TodoItem;
