# Lista de Tarefas React

Este é um aplicativo de lista de tarefas responsivo construído com React, Next.js, TypeScript e Tailwind CSS.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Filtrar tarefas por status (todas, ativas, concluídas).
- Interface de usuário responsiva e estilizada.

## Tecnologias Utilizadas

- **React** 18
- **Next.js** 13
- **TypeScript** 4
- **Tailwind CSS** 3

## Estrutura do Projeto

### `src/app/page.tsx`

Página principal da aplicação. Este componente renderiza o título da aplicação e o componente `TodoList`.

```typescript
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Lista de Tarefas</h1>
        <TodoList />
      </div>
    </main>
  );
}
```

### `src/app/components/`

#### `AddTodoForm.tsx`

Componente responsável pelo formulário de adição de novas tarefas.

- Utiliza o hook `useState` para gerenciar o texto da nova tarefa.
- Implementa a lógica de submissão do formulário.
- Utiliza Tailwind CSS para estilização responsiva.

```typescript
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo.trim(), "active");
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-2 sm:mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="flex-grow p-2 text-sm sm:text-base border border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 sm:mb-0"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded-b sm:rounded-r sm:rounded-b-none hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Adicionar
      </button>
    </form>
  );
};
```

#### `TodoList.tsx`

Componente principal que gerencia a lista de tarefas.

- Mantém o estado das tarefas e do filtro atual usando `useState`.
- Implementa funções para adicionar e alternar o status das tarefas.
- Renderiza o `AddTodoForm`, `TodoFilter` e os `TodoItem`s.
- Aplica a lógica de filtragem das tarefas.

```typescript
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTask = (text: string, status: "active" | "completed") => {
    const newTask: Todo = {
      id: Date.now(),
      text,
      completed: status === "completed",
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-2 sm:p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
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
```

#### `TodoItem.tsx`

Componente que representa uma tarefa individual.

- Recebe as propriedades da tarefa e a função para alternar seu status.
- Renderiza um checkbox e o texto da tarefa.
- Utiliza Tailwind CSS para estilização condicional baseada no estado de conclusão da tarefa.

```typescript
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
```

#### `TodoFilter.tsx`

Componente que permite filtrar as tarefas.

- Renderiza botões para cada opção de filtro (todas, ativas, concluídas).
- Gerencia o estado ativo do filtro selecionado.
- Utiliza Tailwind CSS para estilização responsiva e destaque do filtro ativo.

```typescript
const TodoFilter: React.FC<TodoFilterProps> = ({
  filter,
  setFilter,
  filterLabels,
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-2 sm:mb-4">
      {(["all", "active", "completed"] as const).map((f) => (
        <button
          key={f}
          className={`px-2 sm:px-3 py-1 m-1 text-xs sm:text-sm rounded ${
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
```

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o projeto em modo de desenvolvimento com `npm run dev`.
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Próximos Passos

- Implementar persistência de dados (por exemplo, usando `localStorage` ou uma API backend).
- Adicionar funcionalidade de edição de tarefas.
- Implementar testes unitários e de integração.
- Adicionar animações para melhorar a experiência do usuário.
- Implementar um tema escuro e a opção de alternar entre temas.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).