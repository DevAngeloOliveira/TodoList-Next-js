import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Interface de props para o componente AddTodoForm
interface AddTodoFormProps {
  onAdd: (todo: string, status: "active" | "completed") => void;
}

// Componente AddTodoForm: Renderiza um formulário para adicionar novas tarefas
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  // Estado para o texto da nova tarefa e status
  const [newTodo, setNewTodo] = useState("");
  const [status, setStatus] = useState<"active" | "completed">("active");

  // Lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo.trim(), status);
      setNewTodo("");
    }
  };

  // ... retorno existente ...
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default AddTodoForm;
