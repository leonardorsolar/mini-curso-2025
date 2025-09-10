# Manual de Testes - Sistema de Tarefas

## Testes de Backend (API)

### 1. Operações CRUD Básicas

**Criar tarefa:**

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Implementar autenticação",
  "description": "Adicionar JWT auth no sistema",
  "status": "pendente"
}
```

-   Esperado: Status 201, retorno da tarefa com ID gerado

**Listar todas as tarefas:**

```http
GET /api/tasks
```

-   Esperado: Status 200, array de tarefas

**Buscar tarefa específica:**

```http
GET /api/tasks/{id}
```

-   Esperado: Status 200 (existe) ou 404 (não existe)

**Atualizar status da tarefa:**

```http
PUT /api/tasks/{id}/status
Content-Type: application/json

{
  "status": "em andamento"
}
```

-   Esperado: Status 200, tarefa atualizada

**Remover tarefa:**

```http
DELETE /api/tasks/{id}
```

-   Esperado: Status 200/204

### 2. Filtros e Consultas

**Filtrar por status:**

```http
GET /api/tasks?status=pendente
GET /api/tasks?status=em%20andamento
GET /api/tasks?status=concluída
```

-   Esperado: Apenas tarefas do status especificado

**Status inválido:**

```http
GET /api/tasks?status=invalid
```

-   Esperado: Status 400 com mensagem de erro

### 3. Validações de Entrada

**Título obrigatório:**

```json
POST /api/tasks
{
  "description": "Sem título",
  "status": "pendente"
}
```

-   Esperado: Status 400, erro de validação

**Status inválido na criação:**

```json
POST /api/tasks
{
  "title": "Teste",
  "status": "status_inexistente"
}
```

-   Esperado: Status 400, erro de validação

### 4. Casos Extremos

**Payload muito grande:**

-   Título com 1000+ caracteres
-   Descrição com 10000+ caracteres
-   Esperado: Erro de validação ou truncamento

**Concurrent updates:**

-   Duas requisições simultâneas atualizando a mesma tarefa
-   Esperado: Comportamento consistente

## Testes de Frontend (UI)

### 1. Estados de Loading

**Com network lenta (DevTools):**

-   Abrir página de tarefas
-   Esperado: Skeletons visíveis (lista de placeholders) e botão "Nova Tarefa" com skeleton

**Filtros durante loading:**

-   Aplicar filtro durante carregamento inicial
-   Esperado: Loading state mantido, filtro aplicado após carregamento

### 2. Estado Vazio

**Sem tarefas no sistema:**

-   Home deve mostrar ícone de lista vazia
-   Mensagem "Nenhuma tarefa cadastrada"
-   Botões "Recarregar" e "Nova Tarefa" visíveis

**Filtro sem resultados:**

-   Aplicar filtro que não retorna tarefas
-   Esperado: Mensagem "Nenhuma tarefa encontrada para o filtro selecionado"

### 3. Tratamento de Erros

**Erro de rede:**

-   Parar backend e recarregar página
-   Esperado: Alerta de erro com mensagem amigável e botão "Tentar novamente"

**Erro 500 do servidor:**

-   Simular erro interno no backend
-   Esperado: Mensagem de erro técnico com opção de recarregar

**Timeout de requisição:**

-   Simular requisição muito lenta
-   Esperado: Timeout gracioso com mensagem apropriada

### 4. Funcionalidade de Filtros

**Filtro por status:**

-   Selecionar "Pendente" → mostrar apenas tarefas pendentes
-   Selecionar "Em Andamento" → mostrar apenas tarefas em andamento
-   Selecionar "Concluída" → mostrar apenas tarefas concluídas
-   "Todas" → mostrar todas as tarefas

**Persistência de filtro:**

-   Aplicar filtro, recarregar página
-   Esperado: Filtro mantido na URL e estado

### 5. Formulário de Nova Tarefa

**Validação de campos:**

-   Submeter com título vazio → erro "Título é obrigatório"
-   Título com apenas espaços → erro de validação
-   Selecionar status inválido → erro de validação

**Criação bem-sucedida:**

-   Preencher dados válidos e submeter
-   Esperado: Modal/form fecha, tarefa aparece na lista, feedback de sucesso

**Cancelar criação:**

-   Abrir modal, preencher dados, cancelar
-   Esperado: Modal fecha, dados não salvos, lista inalterada

### 6. Atualização de Status

**Mudança de status via dropdown/select:**

-   Alterar tarefa de "Pendente" para "Em Andamento"
-   Esperado: Atualização visual imediata, persistência no backend

**Mudança de status via drag-and-drop (se implementado):**

-   Arrastar tarefa entre colunas de status
-   Esperado: Mudança visual + API call + confirmação

### 7. Exclusão de Tarefas

**Confirmação de exclusão:**

-   Clicar em "Excluir" → modal de confirmação
-   Confirmar → tarefa removida da lista
-   Cancelar → tarefa mantida

**Exclusão com feedback:**

-   Após exclusão bem-sucedida, mostrar toast/mensagem de confirmação

### 8. Responsividade e UX

**Layout mobile:**

-   Testar em viewport 375px (mobile)
-   Lista deve ser responsiva, botões acessíveis
-   Modal deve ocupar tela inteira se necessário

**Layout tablet/desktop:**

-   Testar em 768px+ (tablet/desktop)
-   Grid/cards organizados adequadamente
-   Modais centralizados

### 9. Integração com API

**Proxy/CORS:**

-   Verificar no Network: requisições para `/api/tasks` (caminho relativo)
-   Não deve haver URLs hardcoded do backend

**Sincronização de dados:**

-   Criar tarefa → aparece na lista sem reload
-   Atualizar status → reflete imediatamente
-   Excluir → remove da lista instantaneamente

### 10. Acessibilidade

**Navegação por teclado:**

-   Tab/Shift+Tab entre elementos interativos
-   Enter para submeter formulários
-   Esc para fechar modais

**Screen readers:**

-   Labels adequados em inputs
-   Botões com texto descritivo ou `aria-label`
-   Status das tarefas anunciado corretamente

**Foco visual:**

-   Primeiro campo do formulário recebe foco ao abrir modal
-   Foco visível em todos elementos interativos
-   Foco retorna ao elemento que abriu o modal após fechamento

### 11. Performance

**Paginação (se implementada):**

-   Lista com 100+ tarefas deve ter paginação
-   Loading apenas dos itens visíveis

**Debounce em filtros:**

-   Filtros de texto devem ter debounce para evitar requests excessivos

**Otimistic updates:**

-   Mudanças de status devem atualizar UI imediatamente
-   Em caso de erro, reverter e mostrar mensagem

---

## Checklist de Testes Rápidos

### Backend ✅

-   [ ] CRUD completo funcionando
-   [ ] Filtros por status
-   [ ] Validações de entrada
-   [ ] Documentação da API (Swagger/OpenAPI)
-   [ ] Códigos de status HTTP corretos
-   [ ] Tratamento de erros consistente

### Frontend ✅

-   [ ] Estados de loading com skeletons
-   [ ] Estados vazios com mensagens apropriadas
-   [ ] Tratamento de erros de rede
-   [ ] Formulários com validação
-   [ ] Filtros funcionais
-   [ ] Responsividade mobile/desktop
-   [ ] Acessibilidade básica
-   [ ] Integração completa com API
