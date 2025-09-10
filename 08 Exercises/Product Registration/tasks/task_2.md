## @tasks/task_2.md – Frontend

<role>
Você é um engenheiro de software sênior. Vai implementar um frontend simples em **React/TypeScript (Vite)** para **gerenciar tarefas** consumindo o backend já criado na task 1 (Express + SQLite), dentro do diretório existente @frontend/ deste monorepo.
</role>

\<dependent_tasks>

-   Essa foi a task feita anteriormente para implementar o backend: @tasks/task_1.md
    \</dependent_tasks>

<instructions>
Implemente dentro de @frontend/ (não criar novo projeto), mantendo o setup atual e utilizando os utilitários/componentes já existentes:
- Criar interface para:
  - Visualizar lista de tarefas
  - Filtrar por status
  - Criar nova tarefa
  - Alterar status de uma tarefa
  - Excluir tarefa
- Centralizar chamadas HTTP em hook `@/hooks/use-tasks.ts` usando **TanStack React Query** (`useQuery`, `useMutation`) e Zod.
- Usar componentes de UI existentes em `@/components/ui/` (card, skeleton, button, badge).
- Criar estados de `loading`, `empty` e `error`.
- Preserve scripts e convenções do projeto (TypeScript, ESLint, Prettier, Tailwind, path alias `@`).
</instructions>

\<file_structure>

```
src/
  hooks/
    use-tasks.ts           # hook para buscar/criar/atualizar/excluir tarefas
  components/
    task-card.tsx          # card visual da task usando UI existente
    add-task-dialog.tsx    # modal de criação de tarefa
  pages/
    tasks-page.tsx         # tela que usa o hook e renderiza grid/lista
  App.tsx                  # renderiza <TasksPage />
```

\</file_structure>

<requirements>
- **VOCÊ DEVE:** usar TypeScript.
- **VOCÊ DEVE:** usar Vite (setup existente).
- **VOCÊ DEVE:** usar Tailwind + componentes em `@/components/ui/*`.
- **VOCÊ DEVE:** validar dados com Zod.
- **VOCÊ DEVE:** usar TanStack React Query (`useQuery`/`useMutation`) para fetching/cache.
- **VOCÊ DEVE:** usar react-hook-form para o modal de criação.
- **VOCÊ DEVE:** usar alias de caminho `@`.
</requirements>

\<behavior_details>

-   Carregamento: exibir placeholders com `skeleton` em layout de grid/lista.
-   Sucesso: renderizar lista/grid responsivo de cards com título, descrição, status.
-   Vazio: mostrar mensagem amigável e botão de recarregar.
-   Erro: mensagem clara e botão “Tentar novamente”.
-   Lista deve atualizar ao criar/editar/excluir tarefa.
    \</behavior_details>

<output>
Além do código, forneça um resumo do que foi implementado e screenshots ou prints de comportamento (opcional).
</output>

<constraints>
- **VOCÊ NÃO DEVE:** hardcodar hosts da API; use caminhos relativos `/api`.
- **VOCÊ NÃO DEVE:** alterar schema da Task.
- **VOCÊ NÃO DEVE:** criar estado global; use apenas hook local nesta tarefa.
</constraints>

\<acceptance_criteria>

-   `npm run dev` inicia em `http://localhost:5173` e exibe a página com grid/lista.
-   Criação, atualização e remoção de tarefas funcionam.
-   Filtragem por status funciona corretamente.
-   Tipos do TypeScript corretos e validação Zod aplicada na fronteira de dados.
-   Lint/Prettier sem erros e build passando.
-   Chamadas à API usam caminhos relativos `/api` em dev.
    \</acceptance_criteria>

---
