import React from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div className="flex items-center p-2 sm:p-3 bg-white rounded shadow mb-1 sm:mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="mr-2 sm:mr-3"
      />
      <span
        className={`text-sm sm:text-base ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
