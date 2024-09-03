# Lista de Tarefas React

Este é um aplicativo de lista de tarefas simples construído com React, Next.js e Styled Components.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Filtrar tarefas por status (todas, ativas, concluídas)
- Interface de usuário responsiva e estilizada

## Tecnologias Utilizadas

- React
- Next.js
- TypeScript
- Styled Components

## Estrutura do Projeto

### `src/app/page.tsx`
Página principal da aplicação. Este componente renderiza o título da aplicação e o componente `TodoList`.

### `src/app/components/`

#### `AddTodoForm.tsx`
Componente responsável pelo formulário de adição de novas tarefas.
- Utiliza estados para gerenciar o texto da nova tarefa e seu status.
- Implementa a lógica de submissão do formulário.
- Estilizado com Styled Components para uma aparência agradável.

#### `TodoList.tsx`
Componente principal que gerencia a lista de tarefas.
- Mantém o estado das tarefas e do filtro atual.
- Implementa funções para adicionar e alternar o status das tarefas.
- Renderiza o `AddTodoForm`, `TodoFilter` e os `TodoItem`s.
- Aplica a lógica de filtragem das tarefas.

#### `TodoItem.tsx`
Componente que representa uma tarefa individual.
- Recebe as propriedades da tarefa e a função para alternar seu status.
- Renderiza um checkbox e o texto da tarefa.
- Estilizado para refletir o estado de conclusão da tarefa.

#### `TodoFilter.tsx`
Componente que permite filtrar as tarefas.
- Renderiza botões para cada opção de filtro (todas, ativas, concluídas).
- Gerencia o estado ativo do filtro selecionado.
- Estilizado para destacar o filtro ativo.

## Como Executar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o projeto em modo de desenvolvimento com `npm run dev`
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Próximos Passos

- Implementar persistência de dados (por exemplo, usando localStorage ou uma API backend)
- Adicionar funcionalidade de edição de tarefas
- Implementar testes unitários e de integração
- Adicionar animações para melhorar a experiência do usuário
- Implementar um tema escuro e a opção de alternar entre temas

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
