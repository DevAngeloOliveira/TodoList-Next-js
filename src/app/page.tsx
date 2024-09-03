"use client";

import Image from "next/image";
import TodoList from "./components/TodoList";

// Componente Home: Página principal da aplicação
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Minha Lista de Tarefas</h1>
      <TodoList />
    </main>
  );
}
