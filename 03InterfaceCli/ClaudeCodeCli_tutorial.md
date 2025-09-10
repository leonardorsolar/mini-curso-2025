# Tutorial Completo: Claude Code CLI para Iniciantes

## 🎯 O que você vai aprender

Neste tutorial abrangente, você dominará o Claude Code CLI do zero, aprendendo a usar esta ferramenta revolucionária de codificação assistida por IA. Ao final, você será capaz de:

-   Instalar e configurar o Claude Code em qualquer sistema
-   Usar comandos essenciais para acelerar seu desenvolvimento
-   Integrar IA no seu fluxo de trabalho diário
-   Automatizar tarefas repetitivas
-   Trabalhar com projetos complexos de forma eficiente

---

## 📖 O que é Claude Code CLI?

Claude Code é uma ferramenta de codificação agêntica da Anthropic que vive no seu terminal e ajuda você a transformar ideias em código mais rápido do que nunca. Diferente de outras soluções, Claude Code é projetado para trabalhar diretamente na linha de comando, onde muitos desenvolvedores passam a maior parte do tempo.

### 🔥 Por que Claude Code CLI é revolucionário?

**Características únicas:**

-   **🖥️ Terminal nativo** - Não é mais uma janela de chat ou IDE separada
-   **🤖 IA agêntica** - Executa ações reais no seu código
-   **📁 Contexto completo** - Entende toda a estrutura do projeto
-   **⚡ Execução direta** - Edita arquivos, executa comandos, cria commits
-   **🔧 Filosofia Unix** - Componível e scriptável
-   **🔒 Enterprise-ready** - Segurança e privacidade de nível empresarial

### 🆚 Claude Code vs. Outras Ferramentas

| Recurso       | Claude Code CLI      | Cursor             | GitHub Copilot         |
| ------------- | -------------------- | ------------------ | ---------------------- |
| **Interface** | Terminal nativo      | IDE separada       | Extensão VS Code       |
| **Execução**  | Direta no sistema    | Limitada ao editor | Apenas sugestões       |
| **Contexto**  | Projeto completo     | Arquivo atual      | Contexto limitado      |
| **Automação** | Total via scripts    | Parcial            | Apenas code completion |
| **Filosofia** | Unix/composabilidade | GUI moderna        | Plugin tradicional     |

### 💡 Casos de uso ideais

**Perfeito para:**

-   Desenvolvedores que vivem no terminal
-   Automação de workflows de desenvolvimento
-   Refatoração de código em larga escala
-   Debugging complexo de projetos
-   Integração CI/CD
-   Análise de logs em tempo real

---

## 💻 Instalação Passo a Passo

### Pré-requisitos

**Requisitos obrigatórios:**

-   Node.js 18 ou mais recente
-   Terminal/command prompt
-   Conexão com internet
-   Conta Claude (gratuita ou paga)

**Sistemas suportados:**

-   ✅ **Windows** 10/11 (PowerShell, CMD, WSL)
-   ✅ **macOS** 10.15+ (Terminal, iTerm2)
-   ✅ **Linux** Ubuntu 18.04+, Fedora, Arch, etc.

### Processo de Instalação

**1. Verificar Node.js**

```bash
# Verificar versão do Node.js
node --version
# Deve mostrar v18.x.x ou superior

# Se não tiver Node.js, instale:
# Windows: https://nodejs.org/en/download/
# macOS: brew install node
# Linux: sudo apt install nodejs npm  # Ubuntu/Debian
```

**2. Instalar Claude Code**

```bash
# Instalação global via npm
npm install -g @anthropic-ai/claude-code

# Verificar instalação
claude --version
```

**3. Configuração inicial**

```````bash
# Primeira execução (fará login automaticamente)
claude

``````bash
Claude Code can now be used with your Claude subscription or billed based on API usage through your Console account.


 Select login method:

 ❯ 1. Claude account with subscription
    Pro, Max, Team, or Enterprise

   2. Anthropic Console account
    API usage billing
```````

1-Entrar com conta Claude (subscription)

Aqui você usa uma conta Claude com assinatura ativa:
Pro
Max
Team
Enterprise

2 Entrar com Anthropic Console account (API billing)
Aqui você usa uma conta do Anthropic Console, que é o portal de APIs da Anthropic.

Tenha um conta pro e escolha 1

# Será redirecionado para autenticação web

# Faça login com sua conta Claude

# Depois retorne ao terminal

````

```bash
│ ✻ Welcome to Claude Code │
╰──────────────────────────╯

 Use Claude Code's terminal setup?

 For the optimal coding experience, enable the recommended settings
 for your terminal: Shift+Enter for newlines

 ❯ 1. Yes, use recommended settings
   2. No, maybe later with /terminal-setup

 Enter to confirm · Esc to skip
````

Essa configuração otimiza seu terminal para trabalhar melhor com Claude Code, especialmente:

-   Shift+Enter para quebras de linha - Permite escrever prompts multi-linha
-   Formatação melhorada - Melhor display de código e respostas
-   Navegação otimizada - Shortcuts para histórico e comandos
    🎯 Recomendação: Escolha opção 1 (Yes)

---

depois:

Análise de Segurança
Essa é uma pergunta muito importante de segurança do Claude Code. Vou te ajudar a decidir:
📁 Sobre o diretório:
Caminho: /home/leonardo/Documents/projetos profissionais/claudecode
Pelo nome, parece ser:

✅ Seu próprio diretório de projetos profissionais
✅ Pasta criada por você para testar Claude Code
✅ Localização segura (Documents do seu usuário)

🛡️ O que Claude Code pode fazer:
Quando você autorizar, Claude poderá:

📖 Ler arquivos do diretório
✏️ Escrever novos arquivos
🔧 Modificar arquivos existentes
⚡ Executar comandos no contexto do projeto

✅ Recomendação: Escolha "1. Yes, proceed"
Por quê é seguro neste caso:

É sua própria pasta - você tem controle total
Pasta de projetos - não contém arquivos críticos do sistema
Ambiente controlado - você está testando/aprendendo
Localização apropriada - dentro do seu Documents

# Pressione Enter para confirmar (opção 1 já selecionada)

Enter

## 🚀 Primeiros Passos

### Sua primeira interação

### Integração com ide

/ide bsuca as suas ide (podendo conecatar com ide)

### Arquivo CLAUDE.md

O claude adiciona regras e memorias que o usuário deseja que ele siga as instruções

para projeto vazio ou com conteúdo:

Começe com:

> /init

Começe com:

> /init
> depois:
> Crie um rota simples get com node express
> /help

Editar o Arquivo CLAUDE.md:

> /memory

Adicionar algo na memoria: digite # para que adicione na memoria

> # nunca use emojis e comentários

Adicione no seu mrojeto atual( 1-Project memory)
digite enter

**Exemplo prático:**

```bash
# Iniciar Claude Code
claude

# Digite no prompt:
> Explique como criar um "Hello World" em Python

# Claude responderá com código e explicação:
# Aqui está um exemplo simples de "Hello World" em Python:
#
# print("Hello, World!")
#
# Para executar:
# 1. Salve em um arquivo .py (ex: hello.py)
# 2. Execute: python hello.py
```

# site:

https://superclaude.org/

# vídeo:

https://www.youtube.com/watch?v=0oHbRWy64sU

### Entendendo a interface

```
┌─────────────────────────────────────────────┐
│ Claude Code v2.1.0                          │ ← Versão
├─────────────────────────────────────────────┤
│ 🤖 Olá! Sou Claude. Como posso ajudar?      │ ← Saudação inicial
├─────────────────────────────────────────────┤
│ Projeto: ~/dev/meu-app                      │ ← Diretório atual
│ Arquivos: 23 │ Linguagem: JavaScript        │ ← Contexto do projeto
├─────────────────────────────────────────────┤
│ > _                                         │ ← Prompt de input
└─────────────────────────────────────────────┘

Atalhos úteis:
- Ctrl+C: Sair
- Esc: Parar execução atual
- ↑/↓: Navegar histórico
- Tab: Autocompletar comandos
```

---

## 📁 Trabalhando com Projetos

### Inicializando um projeto

**1. Criar estrutura básica:**

```bash
# Criar novo projeto
mkdir meu-projeto-claude
cd meu-projeto-claude

# Inicializar com Claude
claude
> /init

# Isso cria um arquivo CLAUDE.md
```

**2. Arquivo CLAUDE.md gerado:**

```markdown
# Meu Projeto Claude

## Visão Geral

[Claude preencherá automaticamente com base no contexto]

## Arquitetura

-   Linguagem principal: [detectada]
-   Framework: [detectado]
-   Estrutura de pastas: [analisada]

## Convenções de código

-   [Padrões identificados]
-   [Estilo de nomenclatura]

## Dependências principais

-   [Lista gerada automaticamente]
```

### Trabalhando com contexto

**Incluir arquivos específicos:**

```bash
# No modo interativo
> Analise o arquivo @package.json e @src/app.js para problemas de dependências

# Com comando direto
claude -p "Revise @src/components/Header.jsx para acessibilidade"
```

**Trabalhar com múltiplos diretórios:**

```bash
# Incluir diretórios externos
claude --add-dir ../shared-lib ../utils

# Agora Claude pode acessar esses diretórios
> Compare a implementação em @../shared-lib/auth.js com @src/auth.js
```

### Exemplos práticos por linguagem

**📄 Projeto Python (Flask API):**

```bash
# Começar novo projeto
mkdir flask-api && cd flask-api
claude

> Crie uma API Flask básica com:
> - Endpoint /users para CRUD
> - Validação de dados com marshmallow
> - Conexão SQLite
> - Testes com pytest
> - Estrutura profissional de pastas

# Claude criará:
# ├── app/
# │   ├── __init__.py
# │   ├── models.py
# │   ├── routes.py
# │   └── schemas.py
# ├── tests/
# ├── requirements.txt
# └── run.py
```

**⚛️ Projeto React (Dashboard):**

```bash
mkdir react-dashboard && cd react-dashboard
claude

> Crie um dashboard React com:
> - Componentes TypeScript
> - Gráficos com Chart.js
> - Roteamento com React Router
> - Estado global com Zustand
> - Styling com Tailwind CSS
> - Setup completo com Vite

# Claude configurará todo o projeto automaticamente
```

**🐹 Projeto Go (Microserviço):**

```bash
mkdir go-microservice && cd go-microservice
claude

> Desenvolva um microserviço Go com:
> - API REST com Gin
> - Middleware de autenticação JWT
> - Conexão PostgreSQL com GORM
> - Docker e docker-compose
> - Makefile para tarefas comuns
> - Estrutura clean architecture
```

---

## 🤖 Dominando a IA

### Prompts efetivos

**❌ Prompts vagos:**

```
> Melhore meu código
> Corrija o bug
> Faça testes
```

**✅ Prompts específicos:**

```
> Refatore a função calculateTotal() em @src/utils.js para melhor performance com arrays grandes
> Corrija o erro "Cannot read property 'length' of undefined" na linha 42 de @components/List.jsx
> Crie testes unitários para a classe UserService cobrindo casos de erro e validação
```

### Workflows inteligentes

**🔄 Fluxo de desenvolvimento TDD:**

```bash
# 1. Definir comportamento
> Crie testes para uma função que valida emails brasileiros (.com.br, .gov.br, etc)

# 2. Implementar função
> Agora implemente a função validateBrazilianEmail() que passa nos testes

# 3. Refatorar
> Otimize validateBrazilianEmail() para melhor performance mantendo os testes passando
```

**🐛 Debugging sistemático:**

```bash
# 1. Analisar erro
> Analise este stack trace: [cole o erro]

# 2. Investigar código
> Examine @src/api/client.js linha 67 onde o erro acontece

# 3. Propor solução
> Sugira 3 formas de corrigir este problema com prós/contras

# 4. Implementar fix
> Implemente a solução mais robusta
```

### Usando contexto eficientemente

**📚 Documentação do projeto:**

```bash
# Atualizar automaticamente
> Revise o CLAUDE.md e atualize com as mudanças recentes do projeto

# Gerar docs da API
> Analise todos os arquivos @routes/ e gere documentação OpenAPI completa

# Criar guia do desenvolvedor
> Crie um README.md completo explicando como rodar, testar e contribuir
```

**🔍 Análise de codebase:**

```bash
# Análise de arquitetura
> Mapeie a arquitetura deste projeto e identifique possíveis code smells

# Análise de performance
> Identifique gargalos de performance nos arquivos @src/

# Análise de segurança
> Revise o código para vulnerabilidades de segurança comuns
```

---

## 🔧 Funcionalidades Avançadas

(que tipos de comandos couns faz sentido você criar um template)
Texto que se repetem

### Comandos personalizados

**Criar comandos próprios:** (criar super promps/ tipos de atividades que você faz)

### exemplo1:

```bash
# Criar diretório de comandos
mkdir -p .claude/commands

# Criar comando personalizado
# .claude/commands/fix.md
```

em fix.md:

```markdown
Este comando serve para corrigir defeitos.

-   Faça um plano
-   Utilize context7 para analisar a biblioteca
-   Rode os testes para tentar identificar aonde está quebrando
-   Faça perguntas de clarificação
```

Assim vocẽ pode criar comando genéricos de templates.
Para validar este comando sair do claude code: crtl+c
retornar : claude

Assim para usar: basta difitar /fix

/fix está acontecendo um problema...

### exemplo2:

```bash
# Criar diretório de comandos
mkdir -p .claude/commands

# Criar comando personalizado
# .claude/commands/deploy.md
```

```markdown
# Deploy automático

Faça deploy da aplicação seguindo estes passos:

$ARGUMENTS

1. Execute testes automatizados
2. Verifique se não há lint errors
3. Faça build da aplicação
4. Execute deployment script
5. Verifique se deployment foi bem-sucedido
6. Envie notificação no Slack

Use as melhores práticas para deploy seguro.
```

**Usar comando personalizado:**

```bash
# No modo interativo
> /deploy para ambiente de staging
```

### Hooks e automação

**Configurar hooks (.claude/hooks.json):**

```json
{
    "pre-commit": {
        "command": "claude -p 'Revise as mudanças staged para problemas de qualidade'",
        "enabled": true
    },
    "post-merge": {
        "command": "claude -p 'Analise conflitos de merge e sugira melhorias'",
        "enabled": true
    }
}
```

**Configuração via comando interativo:**

```bash
> /hooks
# Abrirá menu interativo para configurar hooks
```

### Integração com MCP (Model Context Protocol)

MCP permite que Claude leia documentos no Google Drive, atualize tickets no Jira, ou use ferramentas personalizadas de desenvolvimento.

**Configurar MCP (.mcp.json):**

```json
{
    "mcpServers": {
        "github": {
            "command": "npx",
            "args": ["@modelcontextprotocol/server-github"],
            "env": {
                "GITHUB_PERSONAL_ACCESS_TOKEN": "sua_token_aqui"
            }
        },
        "slack": {
            "command": "npx",
            "args": ["@modelcontextprotocol/server-slack"],
            "env": {
                "SLACK_BOT_TOKEN": "xoxb-sua-token"
            }
        }
    }
}
```

**Usar MCP:**

```bash
# Acessar GitHub issues
> Liste issues abertas do repositório usando MCP GitHub

# Enviar mensagem Slack
> Envie mensagem no #dev-team sobre deployment concluído usando MCP Slack
```

---

## 🚦 Modos de Operação

### Modo Print (-p)

Ideal para scripts e automação:

```bash
# Uso básico
claude -p "Analise este arquivo" < input.txt

# Com formato JSON para parsing
claude -p "Liste todos os TODOs" --output-format json

# Scripting avançado
result=$(claude -p "Conte linhas de código" --output-format json)
echo $result | jq '.summary'
```

### Modo Interativo

**Controles avançados:**

```bash
# Iniciar sessão
claude

# Navegação no histórico
# Esc + Esc = Lista de mensagens anteriores
# ↑/↓ = Navegar comandos

# Controle de execução
# Esc = Parar Claude
# Ctrl+C = Sair completamente
```

### Modo Continuação

```bash
# Continuar última sessão
claude -c

# Continuar com nova pergunta
claude -c -p "Adicione validação de entrada"

# Retomar sessão específica
claude -r "session-id-123" "Continue o desenvolvimento"
```

---

## 🎯 Projetos Práticos

### 🔰 Projeto 1: API REST com Testes (Iniciante)

**Objetivo:** Criar uma API completa com TDD

```bash
mkdir todo-api && cd todo-api
claude

# Prompt inicial
> Crie uma API REST para TODOs com:
> - CRUD completo (Create, Read, Update, Delete)
> - Validação de dados
> - Testes automatizados
> - Documentação da API
> - Configuração de desenvolvimento e produção
> Use Node.js com Express e SQLite
```

**Resultado esperado:**

```
todo-api/
├── src/
│   ├── routes/todos.js
│   ├── models/Todo.js
│   ├── middleware/validation.js
│   └── app.js
├── tests/
│   ├── todos.test.js
│   └── setup.js
├── docs/
│   └── api.md
├── package.json
└── README.md
```

**Comandos de follow-up:**

```bash
# Adicionar autenticação
> Adicione autenticação JWT à API

# Melhorar performance
> Otimize as queries do banco para melhor performance

# Deploy
> Crie configuração Docker para deploy
```

### 🔰 Projeto 2: Dashboard React com Dados Reais (Intermediário)

**Objetivo:** Dashboard interativo com APIs externas

```bash
mkdir sales-dashboard && cd sales-dashboard
claude

> Desenvolva um dashboard de vendas com:
> - Interface React com TypeScript
> - Gráficos interativos (Chart.js ou Recharts)
> - Integração com API externa (pode ser mock)
> - Filtros por data, categoria, vendedor
> - Responsivo para mobile
> - Testes de componentes
> - State management (Zustand ou Redux)
> Use Vite para build tool
```

**Funcionalidades progressivas:**

```bash
# Adicionar real-time
> Integre WebSocket para atualizações em tempo real

# Otimização
> Implemente lazy loading e memoização para performance

# PWA
> Transforme em Progressive Web App
```

### 🔰 Projeto 3: CLI Tool com Go (Avançado)

**Objetivo:** Ferramenta de linha de comando profissional

```bash
mkdir devtools-cli && cd devtools-cli
claude

> Crie uma CLI tool em Go que:
> - Analisa projetos de código para métricas
> - Detecta code smells e vulnerabilidades
> - Gera relatórios em HTML/JSON
> - Suporta múltiplas linguagens (JS, Python, Go)
> - Configuração via arquivo YAML
> - Logs estruturados
> - Testes unitários e de integração
> - Cross-compilation para múltiplas plataformas
> Use Cobra CLI framework
```

**Extensões avançadas:**

```bash
# Plugin system
> Adicione sistema de plugins para análises customizadas

# Git integration
> Integre com Git para analisar apenas mudanças

# CI/CD
> Crie GitHub Actions para usar a ferramenta
```

---

## 🔍 Debugging e Troubleshooting

### Problemas Comuns

**❌ "Claude não está respondendo"**

```bash
# Verificar conexão
curl -I https://api.anthropic.com

# Verificar autenticação
claude --verbose
```

**❌ "Permissões negadas constantemente"**

```bash
# Usar modo sem permissões (cuidado!)
claude --dangerously-skip-permissions

# Ou configurar permissões específicas
claude --allowedTools "Write" "Bash(git:*)"
```

**❌ "Contexto muito longo"**

```bash
# Limpar contexto frequentemente
> /clear

# Usar modo compacto
> /compact Preserve apenas decisões de arquitetura e schema do banco

# Trabalhar com arquivos específicos
> Analise apenas @src/core/ ignorando outros diretórios
```

**❌ "Respostas irrelevantes"**

```bash
# Ser mais específico
> Analise @src/utils/math.js especificamente a função factorial() na linha 25

# Fornecer contexto
> Considerando que este é um e-commerce em React, otimize o componente Cart
```

### Logs e Debug

**Ativar logs detalhados:**

```bash
# Verbose mode
claude --verbose

# Debug MCP
claude --mcp-debug
```

**Analisar logs:**

```bash
# Localizar logs (varia por sistema)
# Linux/macOS: ~/.config/claude-code/logs/
# Windows: %APPDATA%/claude-code/logs/

# Analisar último log
tail -f ~/.config/claude-code/logs/latest.log
```

### Performance

**Otimizar velocidade:**

```bash
# Usar modelo mais rápido
claude --model sonnet

# Limitar turnos para respostas rápidas
claude -p --max-turns 1 "Quick fix for syntax error"

# Formato JSON para parsing programático
claude -p --output-format json "Get project stats"
```

---

## 💡 Dicas de Ouro

### 🚀 Produtividade Máxima

**1. Use contexto inteligentemente**

```bash
# ❌ Contexto demais
> Analise todo o projeto e me diga tudo

# ✅ Contexto focado
> Analise @src/api/ para problemas de rate limiting
```

**2. Combine com ferramentas Unix**

```bash
# Análise de dependências desatualizadas
npm outdated | claude -p "Quais dessas atualizações são seguras?"

# Code review automatizado
git diff main..feature | claude -p "Revise estas mudanças para problemas de segurança"
```

**3. Crie aliases úteis**

```bash
# No seu .bashrc/.zshrc
alias cc="claude"
alias ccr="claude -p 'Review this code for issues'"
alias cct="claude -p 'Generate tests for this code'"
alias ccd="claude -p 'Document this code'"

# Uso
cat component.js | ccr
cat utils.py | cct
```

### 🎯 Workflows Profissionais

**1. Code Review Sistemático**

```bash
# Pre-commit hook
git diff --cached | claude -p "
Analise estas mudanças para:
1. Bugs potenciais
2. Problemas de performance
3. Violations de código
4. Falta de testes
5. Problemas de segurança
Seja específico nas recomendações.
"
```

**2. Documentação Automatizada**

```bash
# Gerar docs da API
find src/routes -name "*.js" -exec cat {} \; | claude -p "
Gere documentação OpenAPI 3.0 para estas rotas.
Inclua exemplos de request/response.
Formato JSON.
" --output-format json > api-docs.json
```

**3. Refatoração Inteligente**

```bash
# Análise antes da refatoração
claude -p "
Analise @src/legacy/user-service.js e sugira:
1. Padrões de design mais apropriados
2. Como melhorar testabilidade
3. Como reduzir acoplamento
4. Plano de migração step-by-step
"
```

### 🛡️ Boas Práticas de Segurança

**1. Nunca commite credenciais**

```bash
# Verificar antes do commit
git diff --cached | claude -p "
Verifique se há credenciais, tokens, ou informações sensíveis.
Seja extremamente rigoroso.
"
```

**2. Audit de dependências**

```bash
# Análise de vulnerabilidades
npm audit --json | claude -p "
Analise estas vulnerabilidades.
Priorize por severidade e impacto.
Sugira plano de correção.
" --output-format json
```

**3. Validação de input**

```bash
# Review focado em segurança
claude -p "
Analise @src/api/ especificamente para:
1. SQL injection
2. XSS vulnerabilities
3. Input validation
4. Authentication bypasses
"
```

---

## 🔧 Configuração Avançada

### Settings personalizados

**Arquivo ~/.config/claude-code/settings.json:**

```json
{
    "defaultModel": "claude-sonnet-4",
    "maxTurns": 10,
    "outputFormat": "text",
    "allowedTools": ["Write", "Bash(git:*)", "Bash(npm:*)", "Bash(docker:*)"],
    "disallowedTools": ["Bash(rm:*)", "Bash(sudo:*)"],
    "autoSave": true,
    "verboseLogging": false
}
```

### Integração com IDEs

**VS Code:**

```json
// tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Claude Review",
            "type": "shell",
            "command": "claude",
            "args": ["-p", "Review current file for issues"],
            "group": "build"
        }
    ]
}
```

**Vim/Neovim:**

```vim
" .vimrc
command! ClaudeReview !cat % | claude -p "Review this code"
command! ClaudeTest !cat % | claude -p "Generate tests"
command! ClaudeDoc !cat % | claude -p "Document this code"
command! ClaudeOptimize !cat % | claude -p "Optimize this code"

" Mapping para usar facilmente
nnoremap <leader>cr :ClaudeReview<CR>
nnoremap <leader>ct :ClaudeTest<CR>
```

### Automação CI/CD

**GitHub Actions (.github/workflows/claude-review.yml):**

```yaml
name: Claude Code Review
on:
    pull_request:
        types: [opened, synchronize]

jobs:
    claude-review:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3

            - name: Setup Node.js
              uses: actions/setup-node@v3
              with:
                  node-version: "18"

            - name: Install Claude Code
              run: npm install -g @anthropic-ai/claude-code

            - name: Authenticate Claude
              env:
                  ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
              run: |
                  echo "$ANTHROPIC_API_KEY" | claude auth

            - name: Review Changes
              run: |
                  git diff origin/main...HEAD | claude -p "
                  Analise estas mudanças de código para:
                  1. Bugs potenciais
                  2. Problemas de performance
                  3. Violações de padrões de código
                  4. Falta de testes
                  5. Problemas de segurança

                  Formate como comentário de PR do GitHub.
                  " --output-format json > review.json

            - name: Post Review Comment
              uses: actions/github-script@v6
              with:
                  script: |
                      const fs = require('fs');
                      const review = JSON.parse(fs.readFileSync('review.json', 'utf8'));

                      github.rest.issues.createComment({
                        issue_number: context.issue.number,
                        owner: context.repo.owner,
                        repo: context.repo.repo,
                        body: `## 🤖 Claude Code Review\n\n${review.content}`
                      });
```

---

## 🔄 Workflows Avançados

### Git Integration

**1. Smart Commit Messages:**

```bash
# Auto-gerar mensagens de commit
git add .
git diff --cached | claude -p "
Gere uma mensagem de commit seguindo conventional commits:
- type(scope): description
- Inclua breaking changes se houver
- Mantenha under 50 chars no título
" --output-format json | jq -r '.message' | git commit -F -
```

**2. Branch Analysis:**

```bash
# Analisar diferenças entre branches
git diff main..feature-branch | claude -p "
Compare esta feature branch com main:
1. Quais funcionalidades foram adicionadas?
2. Há breaking changes?
3. Quais arquivos precisam de mais testes?
4. Está pronto para merge?
"
```

**3. Release Notes Automáticas:**

```bash
# Gerar release notes
git log --oneline v1.0.0..HEAD | claude -p "
Gere release notes profissionais para esta versão:
- Categorize por: Features, Bug Fixes, Breaking Changes
- Use formato markdown
- Inclua links para issues se mencionadas
"
```

### Database Operations

**1. Migration Analysis:**

```bash
# Analisar migrations
cat migrations/*.sql | claude -p "
Analise estas migrations para:
1. Problemas de performance
2. Downtime potencial
3. Rollback safety
4. Index optimization
5. Sugira melhorias
"
```

**2. Query Optimization:**

```bash
# Otimizar queries lentas
cat slow-queries.log | claude -p "
Para cada query lenta:
1. Identifique o problema
2. Sugira otimizações
3. Proponha indexes necessários
4. Estimate impacto na performance
"
```

### Monitoring e Observabilidade

**1. Log Analysis:**

```bash
# Análise inteligente de logs
tail -n 1000 app.log | claude -p "
Analise estes logs para:
1. Padrões de erro
2. Anomalias de performance
3. Usuários afetados
4. Ações recomendadas
5. Urgência (1-5)
"
```

**2. Metrics Dashboard:**

```bash
# Gerar dashboard config
claude -p "
Crie configuração Grafana dashboard para app e-commerce:
- Métricas de negócio (conversão, vendas)
- Métricas técnicas (latência, erro rate)
- Alerts apropriados
- JSON format
" --output-format json > dashboard.json
```

---

## 📊 Casos de Uso por Área

### Frontend Development

**React/Vue/Angular:**

```bash
# Component generation
claude -p "
Crie componente React TypeScript para:
- Product card com imagem, preço, rating
- Props tipadas com interface
- Responsive design
- Accessibility compliance
- Storybook stories
- Jest tests
"

# State management
claude -p "
Crie Zustand store para carrinho de compras:
- Add/remove items
- Calculate totals
- Persist to localStorage
- TypeScript types
- React Query integration
"

# Performance optimization
cat src/components/HeavyComponent.jsx | claude -p "
Otimize este componente para performance:
1. React.memo onde apropriado
2. useMemo/useCallback
3. Code splitting
4. Bundle size impact
"
```

### Backend Development

**APIs REST/GraphQL:**

```bash
# API design
claude -p "
Desenhe API REST para sistema de blog:
- CRUD para posts, comments, users
- Authentication/authorization
- Rate limiting
- Pagination
- Search/filtering
- OpenAPI specification
"

# Database schema
claude -p "
Crie schema PostgreSQL para e-commerce:
- Users, products, orders, payments
- Proper relationships
- Indexes para performance
- Constraints para data integrity
- Migration scripts
"

# Error handling
cat src/api/orders.js | claude -p "
Melhore error handling nesta API:
1. Custom error classes
2. Proper HTTP status codes
3. Structured error responses
4. Logging strategy
5. Client-friendly messages
"
```

### DevOps e Infrastructure

**Docker/Kubernetes:**

```bash
# Containerization
claude -p "
Crie configuração Docker para app Node.js:
- Multi-stage build
- Security best practices
- Minimal image size
- Health checks
- Production ready
Include docker-compose para development
"

# Kubernetes deployment
claude -p "
Crie manifests Kubernetes para:
- Deployment with rolling updates
- Service and Ingress
- ConfigMap and Secrets
- HPA (Horizontal Pod Autoscaler)
- RBAC permissions
- Monitoring annotations
"
```

**CI/CD Pipelines:**

```bash
# GitHub Actions
claude -p "
Crie pipeline CI/CD completo:
- Test em múltiplas versões Node.js
- Lint, test, build
- Security scanning
- Deploy para staging/production
- Rollback automático se falhar
- Notificações Slack
"
```

### Data Engineering

**ETL Pipelines:**

```bash
# Data processing
claude -p "
Crie pipeline Python para processar dados de vendas:
- Extract de múltiplas APIs
- Transform com pandas
- Load para PostgreSQL
- Error handling e retry logic
- Airflow DAG
- Data quality checks
"

# Analytics
cat sales_data.csv | claude -p "
Analise dados de vendas e gere:
1. Insights principais
2. Trends sazonais
3. Produto top performers
4. Recomendações de negócio
5. SQL queries para dashboard
"
```

---

## 🏆 Técnicas de Mestres

### Prompt Engineering Avançado

**1. Structured Prompts:**

```bash
claude -p "
CONTEXT: E-commerce React app with 50k daily users
TASK: Optimize checkout flow component
CONSTRAINTS: Maintain current UX, improve conversion
REQUIREMENTS:
- Reduce form fields
- Add progress indicator
- Implement auto-save
- A/B test ready
OUTPUT: Complete component with tests
"
```

**2. Role-based Prompts:**

```bash
claude -p "
You are a Senior Security Engineer reviewing code.
Analyze this authentication middleware for:
1. Common attack vectors
2. OWASP Top 10 vulnerabilities
3. Rate limiting effectiveness
4. Session management security
5. Detailed remediation steps

Be extremely thorough and security-focused.
"
```

**3. Chain of Thought:**

```bash
claude -p "
Let's refactor this legacy code step by step:

Step 1: Analyze current architecture and identify issues
Step 2: Design improved architecture
Step 3: Create migration plan with minimal downtime
Step 4: Implement changes incrementally
Step 5: Add comprehensive tests
Step 6: Performance comparison

For each step, explain your reasoning and show code examples.
"
```

### Advanced Automation

**1. Multi-file Operations:**

```bash
# Refactor across multiple files
find src/ -name "*.js" -type f | head -10 | while read file; do
  echo "Processing $file"
  cat "$file" | claude -p "
    Modernize this JavaScript to:
    - ES6+ syntax
    - Remove jQuery dependencies
    - Add proper error handling
    - Improve readability
    IMPORTANT: Maintain exact same functionality
  " > "${file}.new"
  mv "${file}.new" "$file"
done
```

**2. Intelligent Code Splitting:**

```bash
# Split large files intelligently
claude -p "
This file @src/utils/helpers.js is 800 lines.
Analyze and suggest how to split into:
1. Logical modules
2. Proper file structure
3. Clean imports/exports
4. No circular dependencies

Then implement the split.
"
```

**3. Dependency Analysis:**

```bash
# Analyze and update dependencies
npm ls --depth=0 --json | claude -p "
Analyze estas dependências:
1. Quais estão desatualizadas?
2. Quais têm vulnerabilidades?
3. Quais podem ser removidas?
4. Sugira cronograma de atualização
5. Identifique breaking changes potenciais
" --output-format json > dependency-analysis.json
```

### Performance Optimization

**1. Bundle Analysis:**

```bash
# Webpack bundle analysis
npx webpack-bundle-analyzer build/static/js/*.js --mode=static --report=report.html
claude -p "
Analise o webpack bundle report em @report.html:
1. Identifique largest chunks
2. Suggira code splitting opportunities
3. Remove unused dependencies
4. Optimize dynamic imports
5. Calculate potential savings
"
```

**2. Database Performance:**

```bash
# PostgreSQL slow query analysis
psql -c "SELECT * FROM pg_stat_statements ORDER BY total_time DESC LIMIT 10;" --json | claude -p "
Para cada slow query:
1. Explain query execution plan
2. Suggest index optimizations
3. Identify N+1 problems
4. Propose query rewrites
5. Estimate performance impact
"
```

---

## 🎭 Casos de Uso Especializados

### Machine Learning

**Data Preparation:**

```bash
# Dataset analysis
claude -p "
Analise este dataset ML @data/customer_churn.csv:
1. Data quality issues
2. Missing values strategy
3. Feature engineering opportunities
4. Potential biases
5. Train/validation/test split recommendations
Generate Python preprocessing pipeline.
"
```

**Model Development:**

```bash
# ML pipeline
claude -p "
Crie pipeline completo para predição de churn:
- Data preprocessing com scikit-learn
- Feature selection
- Model comparison (RF, XGBoost, Neural Net)
- Hyperparameter tuning
- Cross-validation
- Model explainability com SHAP
- MLOps deployment ready
"
```

### Cybersecurity

**Security Audit:**

```bash
# Comprehensive security review
claude -p "
Faça auditoria de segurança completa:

SCOPE: Web application com @package.json dependencies
FOCUS:
1. Dependency vulnerabilities
2. Authentication/authorization flaws
3. Input validation gaps
4. XSS/CSRF protection
5. SQL injection potential
6. Secrets management
7. HTTPS configuration

OUTPUT: Detailed report com severity levels e remediation steps
"
```

**Incident Response:**

```bash
# Security incident analysis
cat security_incident.log | claude -p "
URGENT: Analise este incident log:
1. Timeline of events
2. Attack vectors used
3. Data potentially compromised
4. Immediate containment steps
5. Evidence preservation
6. Communication plan
7. Long-term prevention measures

Format as incident response report.
"
```

### Mobile Development

**React Native:**

```bash
# Cross-platform optimization
claude -p "
Otimize este app React Native para:
1. Performance em Android/iOS
2. Bundle size reduction
3. Native module integration
4. Offline functionality
5. Push notifications
6. App store submission ready
7. CodePush deployment

Include platform-specific considerations.
"
```

### Blockchain/Web3

**Smart Contract Analysis:**

```bash
# Solidity security review
cat contracts/Token.sol | claude -p "
Analise este smart contract para:
1. Reentrancy vulnerabilities
2. Integer overflow/underflow
3. Access control issues
4. Gas optimization
5. Upgrade patterns
6. Testing strategy
7. Audit checklist compliance

Suggest improvements with security focus.
"
```

---

## 🔮 Tendências e Futuro

### Emerging Patterns

**1. AI-First Development:**

```bash
# AI-driven architecture
claude -p "
Design arquitetura para app que:
- Uses AI for real-time recommendations
- Handles ML model versioning
- Scales inference workloads
- Monitors model drift
- A/B tests model performance
- Ensures model explainability

Include infrastructure and monitoring strategy.
"
```

**2. Edge Computing:**

```bash
# Edge deployment strategy
claude -p "
Crie estratégia edge computing para:
- Global content delivery
- Real-time data processing
- Offline-first functionality
- Edge-to-cloud synchronization
- Cost optimization
- Security considerations

Target: CDN edge functions e edge databases
"
```

### Integration Patterns

**1. Microservices Evolution:**

```bash
# Service mesh implementation
claude -p "
Desenhe service mesh para arquitetura microservices:
- Istio configuration
- Service discovery
- Circuit breakers
- Observability (traces, metrics, logs)
- Security policies
- Canary deployments
- Multi-cluster federation

Include migration from monolith strategy.
"
```

**2. Event-Driven Architecture:**

```bash
# Event sourcing implementation
claude -p "
Implemente event sourcing pattern:
- Event store design
- Aggregate root patterns
- Command/query separation
- Event replay mechanisms
- Snapshot strategies
- Distributed transactions
- Eventual consistency handling

Use Apache Kafka e PostgreSQL.
"
```

---

## 📚 Recursos Adicionais

### Documentação e Comunidade

**Links Essenciais:**

-   🌐 **Documentação Oficial:** [docs.anthropic.com/claude-code](https://docs.anthropic.com/claude-code)
-   💬 **Discord da Comunidade:** [discord.gg/claude](https://discord.gg/claude)
-   🐛 **Issues GitHub:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
-   📖 **Guias e Tutoriais:** [claude.ai/code](https://claude.ai/code)
-   🎬 **Vídeos Oficiais:** Canal YouTube Anthropic
-   📝 **Blog Posts:** [anthropic.com/engineering](https://anthropic.com/engineering)

### Ferramentas Complementares

**Extensões e Integrações:**

-   **ccexp** - CLI interativo para descobrir configurações
-   **cchistory** - Histórico de comandos Claude Code
-   **cclogviewer** - Visualizador de logs em HTML
-   **CC Notify** - Notificações desktop
-   **cchooks** - SDK Python para hooks
-   **claude-code-hooks-sdk** - SDK PHP para hooks

### Learning Path

**📚 Trilha de Aprendizado Sugerida:**

1. **Semana 1 - Fundamentos**

    - Instalação e configuração
    - Comandos básicos
    - Primeiro projeto simples

2. **Semana 2 - Produtividade**

    - Comandos slash
    - Workflows eficientes
    - Debugging

3. **Semana 3 - Automação**

    - Scripts e pipes
    - Comandos personalizados
    - Integração CI/CD

4. **Semana 4 - Avançado**
    - MCP integrations
    - Hooks e configurações
    - Performance optimization

### Certificações e Competências

**🏅 Níveis de Proficiência:**

**Iniciante** ✅

-   Instalar e configurar Claude Code
-   Usar comandos básicos
-   Criar projetos simples
-   Entender modes de operação

**Intermediário** 🚀

-   Workflows automatizados
-   Comandos personalizados
-   Integração com ferramentas
-   Debugging eficiente

**Avançado** 🎯

-   MCP configurations
-   Enterprise deployments
-   Complex automation
-   Security best practices

**Expert** 🏆

-   Custom integrations
-   Performance optimization
-   Team training
-   Contributing back to community

---

## 🎉 Conclusão

Claude Code CLI representa uma mudança fundamental na forma como desenvolvemos software. Não é apenas mais uma ferramenta de IA - é um parceiro inteligente que entende seu código, executa ações reais e se integra perfeitamente ao seu workflow existente.

### 🔑 Pontos-chave para Lembrar:

**✨ Filosofia Core:**

-   Terminal-first approach
-   Composable e scriptable
-   Ação direta, não apenas sugestões
-   Unix philosophy aplicada à IA

**🚀 Benefícios Reais:**

-   **10x productivity** em tarefas repetitivas
-   **Debugging inteligente** com contexto completo
-   **Automation eficiente** de workflows
-   **Code quality** consistente via automation

**🛡️ Boas Práticas:**

-   Use contexto específico, não genérico
-   Combine com ferramentas Unix
-   Configure permissões apropriadas
-   Mantenha security em mente sempre

### 🎯 Seus Próximos Passos:

1. **Hoje:** Instale e complete o primeiro projeto prático
2. **Esta semana:** Integre no seu workflow diário
3. **Este mês:** Automatize suas tarefas mais comuns
4. **Próximos 3 meses:** Domine features avançadas e MCP

### 💫 O Futuro do Desenvolvimento

Com Claude Code CLI, você não está apenas aprendendo uma ferramenta - está abraçando o futuro do desenvolvimento de software. Um futuro onde:

-   **IA e humanos colaboram** naturalmente
-   **Tarefas repetitivas são automatizadas**
-   **Qualidade de código é consistente**
-   **Produtividade é multiplicada, não apenas adicionada**

### 🤝 Contribua com a Comunidade

-   Compartilhe seus workflows no Discord
-   Contribua com comandos personalizados
-   Reporte bugs e sugestões
-   Ajude outros desenvolvedores

**Lembre-se:** A melhor forma de dominar Claude Code é usando-o diariamente. Comece pequeno, seja consistente, e gradualmente incorpore funcionalidades mais avançadas.

O terminal sempre foi o lugar onde a mágica acontece. Agora, com Claude Code, essa mágica tem inteligência artificial.

**Happy coding! 🚀**

---

_Tutorial criado para maximizar seu potencial com Claude Code CLI. Dúvidas? A própria ferramenta pode te ajudar - simplesmente pergunte no terminal! 🤖✨_

**Comandos para começar agora:**

```bash
npm install -g @anthropic-ai/claude-code
claude
> Como posso começar meu primeiro projeto?
```

# Avançado:

## ⌨️ Comandos Essenciais

### Comandos Básicos do Terminal

Aqui estão os comandos essenciais para usar Claude Code:

| Comando             | Descrição                         | Exemplo                            |
| ------------------- | --------------------------------- | ---------------------------------- |
| `claude`            | Inicia REPL interativo            | `claude`                           |
| `claude "query"`    | Inicia REPL com prompt inicial    | `claude "explique este projeto"`   |
| `claude -p "query"` | Consulta via SDK, depois sai      | `claude -p "explique esta função"` |
| `claude -c`         | Continua conversa mais recente    | `claude -c`                        |
| `claude update`     | Atualiza para versão mais recente | `claude update`                    |

### Flags Importantes

Personalize o comportamento do Claude Code com estas flags:

| Flag                             | Função                                            | Exemplo                                  |
| -------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| `--add-dir`                      | Adiciona diretórios extras para Claude acessar    | `claude --add-dir ../apps ../lib`        |
| `--output-format`                | Define formato de saída (text, json, stream-json) | `claude -p "query" --output-format json` |
| `--verbose`                      | Mostra logs detalhados                            | `claude --verbose`                       |
| `--model`                        | Especifica modelo (sonnet ou opus)                | `claude --model opus`                    |
| `--dangerously-skip-permissions` | Pula prompts de permissão                         | `claude --dangerously-skip-permissions`  |

### Uso com Pipes (Unix Philosophy)

**Exemplos avançados:**

```bash
# Analisar logs de erro
cat error.log | claude -p "Resuma os erros principais e sugira soluções"

# Processar saída de comando
git diff | claude -p "Revise estas mudanças e sugira melhorias"

# Monitoramento em tempo real
tail -f app.log | claude -p "Alerte se aparecerem erros críticos"

# Análise de código
find . -name "*.py" -exec cat {} \; | claude -p "Analise este código Python e encontre problemas de performance"
```

---

## 🛠️ Comandos Slash Interativos

Quando estiver no modo interativo (`claude`), você pode usar comandos especiais com `/`:

### Comandos de Controle

| Comando  | Função                                                      | Exemplo       |
| -------- | ----------------------------------------------------------- | ------------- |
| `/help`  | Lista todos os comandos disponíveis                         | `/help`       |
| `/clear` | Reseta o histórico da conversa e contexto da sessão atual   | `/clear`      |
| `/model` | Permite selecionar modelo Claude diferente (Opus ou Sonnet) | `/model opus` |
| `/exit`  | Sai do Claude Code                                          | `/exit`       |

### Comandos de Projeto

| Comando   | Função                                                                | Exemplo                 |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| `/init`   | Cria arquivo CLAUDE.md no diretório raiz do projeto                   | `/init`                 |
| `/review` | Claude pode detectar bugs, sugerir melhorias e verificar conformidade | `/review`               |
| `/test`   | Gera testes automatizados                                             | `/test função_calcular` |
| `/docs`   | Gera documentação                                                     | `/docs api.py`          |

### Comandos de Debug

| Comando     | Função                     | Exemplo                                  |
| ----------- | -------------------------- | ---------------------------------------- |
| `/fix`      | Analisa e corrige erros    | `/fix "TypeError: cannot read property"` |
| `/explain`  | Explica código selecionado | `/explain função_complexa`               |
| `/optimize` | Otimiza performance        | `/optimize algoritmo_busca`              |

---
