import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 14px;
  background-color: ${(props) => (props.active ? "#4caf50" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#45a049" : "#e0e0e0")};
  }
`;

interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}

// Interface de props para o componente TodoFilter
interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}

// Componente TodoFilter: Renderiza botões de filtro para as tarefas
const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <FilterContainer>
      <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
        Todas
      </FilterButton>
      <FilterButton
        active={filter === "active"}
        onClick={() => setFilter("active")}
      >
        Ativas
      </FilterButton>
      <FilterButton
        active={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Concluídas
      </FilterButton>
    </FilterContainer>
  );
};

export default TodoFilter;
