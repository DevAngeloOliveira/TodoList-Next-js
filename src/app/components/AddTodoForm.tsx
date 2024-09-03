import React, { useState } from "react";

interface AddTodoFormProps {
  onAdd: (todo: string, status: "active" | "completed") => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  const [status, setStatus] = useState<"active" | "completed">("active");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo.trim(), status);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="flex-grow p-2 text-base border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="px-4 py-2 text-base bg-green-500 text-white rounded-r hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Adicionar
      </button>
    </form>
  );
};

export default AddTodoForm;
