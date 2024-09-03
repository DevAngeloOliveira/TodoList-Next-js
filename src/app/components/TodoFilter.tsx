import React from "react";

interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
  filterLabels: {
    all: string;
    active: string;
    completed: string;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  filter,
  setFilter,
  filterLabels,
}) => {
  return (
    <div className="flex justify-center mb-4">
      {(["all", "active", "completed"] as const).map((f) => (
        <button
          key={f}
          className={`px-3 py-1 mx-1 text-sm rounded ${
            filter === f
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter(f)}
        >
          {filterLabels[f]}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
