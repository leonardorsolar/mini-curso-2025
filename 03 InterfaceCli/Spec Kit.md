**Spec Kit** (ou _Spec-Driven Development / Spec-Kit_) Desenvolvimento de Software Orientado por Especificações (SDD) com IA

O Spec Kit é um toolkit open-source que propõe uma nova abordagem chamada Spec-Driven Development - basicamente, você especifica o que quer e a IA constrói pra você.

## https://github.com/github/spec-kit?utm_source=chatgpt.com

## O que é o Spec Kit

-   Spec Kit é um toolkit open source criado pelo GitHub para promover um método de desenvolvimento de software guiado por especificações. ([The GitHub Blog][1])
-   Em vez de codificar primeiro e depois documentar, ele propõe que você comece definindo o **“o que”** (o que o software deve fazer, pra quem, por que) — isso chama-se _Specify_. Depois você define o _como_ (pilha tecnológica, arquitetura, restrições) — _Plan_. A seguir divide isso em tarefas pequenas — _Tasks_. E então implementa, verificando em cada fase. ([Visual Studio Magazine][2])
-   Ele também traz uma CLI (linha de comando), templates, prompts, estrutura para organizar esses artefatos. ([GitHub][3])

---

## Quando usar

Spec Kit parece útil especialmente em cenários como:

-   Projetos _greenfield_ (do zero), onde você está iniciando algo novo. ([Visual Studio Magazine][2])
-   Adicionar features em sistemas existentes, para garantir que tudo se integre bem. ([The GitHub Blog][1])
-   Modernização de código legada (“legacy code”) — definir claramente o que já existe e como evoluir. ([The GitHub Blog][1])

---

## Pré-requisitos

Para usar o Spec Kit você vai precisar:

-   Um sistema compatível: Linux ou macOS, ou Windows com WSL2. ([GitHub][3])
-   Node.js 18+
-   Python 3.11+ instalado. ([GitHub][3])
-   Git. ([Visual Studio Magazine][2])
-   Um “coding agent” de AI (se for usar parte de geração automática): pode ser GitHub Copilot, Claude Code, Gemini CLI, Cursor. ([GitHub][3])
-   Ferramentas de linha de comando como a especificada CLI do Spec Kit. ([GitHub][3])

---

## Como usar — passo a passo básico

Aqui vai um guia prático de como começar:

1. **Clonar (ou instalar) o Spec Kit**
   Você pode instalar via git/CLI. Exemplo dado no repositório:

    ```
    uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
    ```

    Isso inicializa o seu projeto com a estrutura do Spec Kit. ([GitHub][3])

2. **Inicializar o projeto**
   `specify init` com opções como:

    - escolher o “coding agent” que vai usar (Copilot, Claude, etc.) ([GitHub][3])
    - definir se vai inicializar git automaticamente, ou em diretório atual, etc. ([GitHub][3])

3. **Gerar a especificação (“Specify”)**
   Use o comando `/specify` para descrever em alto nível o que você quer construir. Focar nos requisitos do usuário, fluxos, o “por que”. ([The GitHub Blog][1])

    /specify

```bash
   # To-Do List App

- O usuário poderá:
  - Adicionar novas tarefas.
  - Listar tarefas existentes.
  - Marcar tarefas como concluídas.
  - Excluir tarefas.
- As tarefas serão armazenadas em `localStorage`.
- Interface simples, responsiva, em HTML + CSS.
- Público-alvo: estudantes e iniciantes em programação web.
- Objetivo: aprender manipulação do DOM e armazenamento local.
```

4. **Planejamento técnico (“Plan”)**
   Depois que a especificação estiver bem definida, com `/plan` você define o stack, arquitetura, restrições, padrões, etc. ([The GitHub Blog][1])

    ``

5. **Divisão em tarefas (“Tasks”)**
   Com base na especificação + plano, gerar tarefas menores, que sejam revisáveis e implementáveis isoladamente. ([The GitHub Blog][1])

6. **Implementação (“Implement”)**
   Aqui é escrever o código (ou gerar com agente de IA), revisar, testar, iterar. Importante: validar cada pequena parte, garantir que esteja de acordo com a especificação e plano. ([The GitHub Blog][1])

7. **Refinamentos**
   Caso durante a implementação apareçam detalhes que não estavam previstos, voltar à espec ou ao plano para ajustar. Especificações são artefatos vivos. ([The GitHub Blog][1])

---

Boa! Peguei o conteúdo bruto que você escreveu e formatei em estilo **post para TabNews**: com seções claras, tópicos, emojis e um fluxo didático. Aqui vai a versão revisada:

---

# Spec Kit: Desenvolvimento de Software Orientado por Especificações (SDD) com IA 🚀

Salve, galera do TabNews!
Hoje vou falar sobre uma parada revolucionária que o GitHub lançou recentemente e que tá deixando muito dev animado: o **Spec Kit** 🎯.

Ele é um toolkit open-source que traz uma abordagem chamada **Spec-Driven Development (SDD)** — basicamente, você **especifica o que quer** e a **IA constrói pra você**. Parece futurista? É porque é mesmo! 🤖

---

## 🤔 O que é Spec-Driven Development?

Durante décadas, seguimos quase sempre a mesma linha:
**documentação → código → deploy → reza pra dar certo.**

O SDD muda isso completamente:

-   As especificações deixam de ser _docs esquecidos_ e passam a ser **executáveis**;
-   A própria IA interpreta a intenção e gera implementações funcionais;
-   Você foca no **"o quê"** e não no **"como"**.

👉 Exemplo: em vez de escrever código em React, você diz _"quero um sistema de fotos com drag and drop"_ e o Spec Kit cria a base do projeto.

---

## 🚀 Por que isso é revolucionário?

A filosofia do Spec Kit é simples mas poderosa:

-   ✅ **Desenvolvimento orientado por intenção**: o _quê_ antes do _como_
-   ✅ **Especificações ricas e vivas**: documentos que evoluem junto com o código
-   ✅ **Refinamento em múltiplas etapas**: iteração em ciclos curtos (/specify → /plan → /tasks → implement)
-   ✅ **IA como parceira**: dependência em LLMs avançados para interpretar intenções

---

## 📂 Repositório e Instalação

-   O Spec Kit é **open-source**, código no GitHub: [github/spec-kit](https://github.com/github/spec-kit)
-   Mantido por **Den Delimarsky (@localden)** e **John Lam (@jflam)**
-   Licença **MIT**: pode usar, modificar e distribuir livremente
-   Issues abertas e comunidade bem receptiva

---

## 🛠️ Mãos na Massa: Tutorial com Gemini CLI

### 🔧 Pré-requisitos

-   Linux/macOS (ou WSL2 no Windows)
-   Node.js 18+
-   Python 3.11+
-   Git
-   [uv](https://github.com/astral-sh/uv) para gerenciar pacotes

---

### 1️⃣ Instalar o Gemini CLI

```bash
# Verificar Node.js
node -v

# Instalar globalmente
npm install -g @google/gemini-cli

# Ou rodar sem instalar
npx https://github.com/google-gemini/gemini-cli
```

Agora execute gemini no terminal e faça login com sua conta Google. Isso te dá acesso gratuito ao Gemini 2.5 Pro com 60 requests por minuto e 1.000 por dia.

---

### 2️⃣ Inicializar o Projeto

```bash
# Instalar Specify CLI
uvx --from git+https://github.com/github/spec-kit.git specify init meu-projeto

# Com agente de IA específico
uvx --from git+https://github.com/github/spec-kit.git specify init meu-projeto --ai gemini
```

⚙️ Opções: escolher _coding agent_ (Copilot, Claude, etc.), inicializar Git automático ou não, diretório atual ou novo.

#### Entrar no Projeto e Iniciar o Gemini

```bash
cd meu-projeto
gemini
```

Se tudo deu certo, você vai ver os comandos /specify, /plan e /tasks disponíveis.

---

### 3️⃣ Criar a Especificação (/specify)

Agora vem a parte mágica! Use o comando /specify e descreva o que você quer construir, não como:

```bash
/specify Quero construir um sistema de gerenciamento de tarefas chamado TaskMaster.
O usuário deve poder criar projetos, adicionar membros da equipe, atribuir tarefas,
comentar e mover tarefas entre colunas estilo Kanban. Para essa primeira versão,
vamos ter 5 usuários pré-definidos: 1 product manager e 4 engenheiros. Criar 3
projetos de exemplo. As colunas do Kanban são: "A Fazer", "Em Progresso",
"Em Revisão" e "Concluído". Sem login por enquanto. Cada card de tarefa deve
permitir mudança de status por drag-and-drop, comentários ilimitados e
atribuição de usuários. Tarefas atribuídas ao usuário atual devem ter cor diferente.
```

➡️ O Gemini vai processar isso e criar uma especificação completa com user stories e requisitos funcionais. Ele também vai criar um branch novo (tipo 001-taskmaster) e uma pasta specs/001-taskmaster.

---

### 4️⃣ Refinar a Especificação (opcional)

Depois da primeira geração, você pode refinar:

```bash
/specify Para cada projeto de exemplo, crie entre 5 e 15 tarefas distribuídas aleatoriamente
entre os diferentes estágios. Garante que tem pelo menos uma tarefa em cada estágio.

```

E peça pro Gemini validar a checklist:

```bash
/specify Leia a checklist de revisão e aceite, e marque cada item se a especificação
atende aos critérios. Deixe vazio se não atender.

```

---

### 5️⃣ Criar o Plano Técnico (/plan)

Agora você especifica a stack tecnológica com /plan:

```bash
/plan Vamos gerar isso usando html, css e javascript usando Materialize e armazenamento localhost
```

ou

```bash
/plan Vamos gerar isso usando React com Vite, TypeScript, TailwindCSS para estilo,
Zustand para gerenciamento de estado, React Beautiful DnD para drag-and-drop,
e JSON local para persistência de dados.
```

ou

```bash
/plan Vamos gerar isso usando React com Vite, TypeScript, TailwindCSS para estilo,
Zustand para gerenciamento de estado, React Beautiful DnD para drag-and-drop,
e JSON local para persistência de dados. A arquitetura deve ser simples com
componentes funcionais e hooks customizados.
```

O Gemini gera:

-   `api-spec.json`
-   `data-model.md`
-   `plan.md`
-   `research.md`

O Gemini vai gerar documentos detalhados de implementação, incluindo api-spec.json, data-model.md, plan.md, e research.md.

Perfeito! Aqui está o conteúdo **formatado de forma clara e organizada**, usando títulos e listas para facilitar a leitura:

---

## 📄 api-spec.json → Contrato de API

**O que é:**
Especificação técnica da API, incluindo rotas, métodos, payloads e respostas.

**Formato:**
Geralmente segue **OpenAPI/Swagger** em JSON.

**Para que serve:**

-   Dá para importar no **Postman** ou **Insomnia** e testar endpoints.
-   Garante que **backend e frontend conversem na mesma língua**.

```json
{
    "paths": {
        "/tasks": {
            "get": { "summary": "Lista todas as tarefas" },
            "post": { "summary": "Cria uma nova tarefa" }
        },
        "/tasks/{id}": {
            "put": { "summary": "Atualiza uma tarefa" },
            "delete": { "summary": "Remove uma tarefa" }
        }
    }
}
```

---

## 📄 data-model.md → Entidades e Estrutura de Dados

**O que é:**
Documento em Markdown que descreve os **modelos de dados** do sistema.

**Para que serve:**

-   Define as **entidades principais** (ex.: `Task`, `User`).
-   Mostra atributos, tipos e **relacionamentos**.
-   Ajuda o time a **alinhar antes de codar** o banco de dados ou objetos no código.

```markdown
# Data Model

## Task

-   id: string (UUID)
-   title: string
-   description: string
-   status: enum ["todo", "doing", "done"]
-   createdAt: datetime
-   updatedAt: datetime

## User

-   id: string (UUID)
-   name: string
-   email: string
```

---

## 📄 plan.md → Plano Técnico e Arquitetura

**O que é:**
Documento que descreve o **plano técnico da implementação**.

**Para que serve:**

-   Define a **stack tecnológica** (ex.: React, Node, banco de dados, Tailwind).
-   Mostra a **arquitetura** e padrões a seguir.
-   Pode incluir **fluxos de autenticação, deploy e CI/CD**.

```markdown
# Plano Técnico

-   Frontend: React + TypeScript + Vite
-   Backend: Node.js + Express
-   Banco: PostgreSQL
-   Autenticação: JWT
-   Hospedagem: Vercel (frontend) + Railway (backend)
-   Estilo: TailwindCSS
```

---

## 📄 research.md → Justificativa e Comparações

**O que é:**
Documento de **pesquisa e referências técnicas**.

**Para que serve:**

-   Guarda estudos de **bibliotecas comparadas** (ex.: Tailwind vs Bootstrap).
-   Inclui links úteis, benchmarks e trade-offs.
-   Justifica **por que a escolha técnica foi feita**.

```markdown
# Research

-   Estado global:
    -   Redux → robusto, mas pesado.
    -   Zustand → leve, simples, ideal para MVP.
-   Estilização:
    -   TailwindCSS escolhido pela velocidade e suporte a design system.
-   Persistência local:
    -   LocalStorage para MVP (sem necessidade de backend inicial).
```

---

### 6️⃣ Validar o Plano

Peça pro Gemini auditar o plano:

```bash
/specify Audite o plano de implementação.
Leia com olho crítico e determine a sequência de tarefas.
```

ou

```bash
Audite o plano de implementação e os arquivos de detalhes. Leia com olho crítico
para determinar se há uma sequência óbvia de tarefas. Referencie os lugares
apropriados nos detalhes de implementação onde pode encontrar informações.

```

---

### 7️⃣ Gerar Tarefas (/tasks)

```bash
/tasks
```

➡️ Divide em tarefas pequenas e revisáveis.

---

### 8️⃣ Implementar

# Rodar apenas a T001

```bash
specify implement --task T001
```

ou

```bash
implement specs/001-taskmaster/plan.md
```

O Gemini gera código, resolve dependências e ajusta erros de build automaticamente.

Após o Gemini/Spec-Kit gerar os diretórios:

# Marcar como concluída

```bash
specify tasks complete T001
```

---

## 🎁 Resultado Esperado

No final você terá:

-   ✅ Projeto React funcional
-   ✅ Especificações em Markdown
-   ✅ Plano técnico detalhado
-   ✅ Código TypeScript estruturado
-   ✅ Kanban com drag-and-drop
-   ✅ Gerenciamento de estado com Zustand

---

## ⚖️ Vantagens e Desvantagens

**Vantagens:**

-   🚀 Acelera muito MVPs e protótipos
-   📋 Força clareza nos requisitos
-   📝 Código bem estruturado e documentado
-   🌐 Funciona com várias stacks
-   💸 Gratuito e open-source

**Desvantagens:**

-   🧪 Ainda experimental
-   🔄 Requer refinamento constante
-   📦 Pode gerar código over-engineered
-   🤖 Dependente da qualidade dos prompts
-   ⏳ Limitado pela IA escolhida

---

## 💡 Dicas de Ouro

-   Seja **específico nas especificações**
-   Não pule a **validação e checklist**
-   Use **checkpoints de refinamento**
-   Teste bastante antes de confiar 100%
-   Itere o ciclo: **/specify → /plan → /tasks → implement → refine**

---

## 🚀 Conclusão

O **Spec Kit** pode ser um **divisor de águas**.
Ele muda o foco do **código bruto** para o **produto e experiência do usuário**.

Claro, ainda precisa de devs experientes para validar e refinar — mas o potencial é enorme: acelerar MVPs, protótipos e até features completas.

---

https://www.tabnews.com.br/n0n3br/spec-kit-desenvolvimento-de-software-orientado-por-especificacoes-sdd-com-ia
