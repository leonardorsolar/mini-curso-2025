## @tasks/task_1.md – Backend

<role>
Você é um engenheiro de software sênior. Vai implementar um backend minimalista porém sólido em **TypeScript** com **Express**, usando **SQLite** para persistência, a fim de **cadastrar e gerenciar tarefas** de um to-do list, dentro do diretório existente @backend/ deste repositório.
</role>

\<task_model>

```ts
export type Task = {
    id: string
    title: string
    description?: string
    status: "pendente" | "em andamento" | "concluída"
    createdAt: string
    updatedAt: string
}
```

\</task_model>

<instructions>
Implemente dentro de @backend/ (não criar novo projeto), mantendo o setup atual, com o mínimo necessário para um live coding fluido:
- API REST com **Express**.
- Banco local **SQLite**.
- Estrutura mínima em @backend/src/: `index.ts`, `db.ts`, `tasks.ts` (router + handlers).
- Endpoints:
  - `POST /api/tasks` → criar tarefa
  - `GET /api/tasks` → listar tarefas
  - `GET /api/tasks?status=pendente|em andamento|concluída` → filtrar tarefas
  - `PATCH /api/tasks/:id/status` → atualizar status
  - `DELETE /api/tasks/:id` → remover tarefa
- Bootstrapping automático do schema no start (criar tabela se não existir).
- Scripts existentes (`dev`, `build`, `start`) devem continuar funcionando.
- Documente a API com padrão REST (ex.: README + exemplos de requests).
</instructions>

<requirements>
- Linguagem: TypeScript.
- Sem ORM, usar queries explícitas.
- CORS liberado para `http://localhost:5173` (Vite do frontend).
- Config via `.env` (`PORT=3005`, `DATABASE_URL` para SQLite).
- Respostas JSON consistentes (erro e sucesso básicos).
</requirements>

<output>
Além de implementar, forneça um resumo de endpoints criados e um exemplo de request/response para cada operação.
</output>

<constraints>
- **NÃO DEVE:** criar placeholders no banco.
- **NÃO DEVE:** mudar o schema da Task.
- **VOCÊ DEVE:** tratar erros básicos (400 validação, 404 recurso não encontrado, 500 genérico).
</constraints>

\<acceptance_criteria>

-   `npm run dev` inicia o servidor em `http://localhost:3005`, inicializa o DB (cria arquivo/tabelas).
-   `POST /api/tasks` cria tarefa e retorna `201` com o recurso.
-   `GET /api/tasks` lista tarefas; filtragem por status funciona.
-   `PATCH /api/tasks/:id/status` atualiza corretamente o status.
-   `DELETE /api/tasks/:id` remove a tarefa.
-   CORS habilitado para `http://localhost:5173`.
-   Código simples, tipado, lint e tsc funcionando.
    \</acceptance_criteria>

---
