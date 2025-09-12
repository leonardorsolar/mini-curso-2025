# Pergunta 1: LLM

**Faça a pergunta ao chatgpt:**

1- O que é LLM e quais sao as principais existentes no mercado?

---

# Pergunta 2: Diferença entre **usar uma LLM diretamente** e **usar uma LLM dentro de um agente**.

**Faça a pergunta ao chatgpt:**

1- Quando eu dou um input de uma tarefa para o llm é uma coisa mas quando eu construo um agente com prompt e dou um input é outra coisa. Me explique

---

# Pergunta 3: regras, comandos, tarefas, agentes e subagentes

**Faça a pergunta ao chatgpt:**

3- Tenho dúvida do que é regras, comandos, tarefas, agentes e subagentes

---

# LLMs = Tecnologias / “Cérebros”

Modelos de linguagem treinados para entender e gerar texto:

GPT-4, GPT-4o → da OpenAI
Gemini 1.5 Pro, Flash → do Google
Claude 3 Opus, Sonnet, Haiku → da Anthropic
Grok-1.5 → da xAI
Qwen-Max, Qwen-Turbo → da Alibaba

# 🔹 O que são **tokens**

-   Um **token** é uma **unidade de texto** que o modelo de IA usa para **entender e gerar linguagem**.
-   Não é exatamente uma palavra, mas um pedaço dela.
-   Dependendo do idioma e da palavra, um token pode ser:

    -   Uma palavra inteira curta → `cachorro` pode ser **1 token**.
    -   Uma parte de uma palavra → `informática` pode virar **2 tokens**: `infor` + `mática`.
    -   Até mesmo espaços, pontuação e quebras de linha contam como tokens.

---

# tokens

https://platform.openai.com/tokenizer

Todos os modelos tem limitações na quantidade de tokens que conseguem aceitar como entrada, o GPT-5 tem limite de 400k tokens enquanto o Claude Opus 4 tem 200k tokens e o Google Gemini 2.5 Pro tem 1M de tokens em sua context window

## 🔹 Exemplos práticos

Frase:
👉 `"Eu gosto de estudar IA."`

-   Em tokens poderia ser dividido assim:

    -   `Eu` → 1 token
    -   `gosto` → 1 token
    -   `de` → 1 token
    -   `estudar` → 1 token
    -   `IA` → 1 token
    -   `.` → 1 token

➡️ Total: **6 tokens**

---

## 🔹 Por que tokens importam?

1. **Limite de contexto**

    - Cada modelo de IA tem um limite máximo de tokens que consegue processar de uma vez (a “context window”).
    - Exemplo: GPT-4 tem versões de 8k, 32k ou mais tokens. Isso define **quanto de texto você pode colocar** no chat de uma vez.

2. **Custo (\$)**

    - Como no Cursor (e em APIs), o custo é calculado por **número de tokens processados**.
    - Se você manda um texto de 2.000 palavras, pode virar uns **2.500 a 3.000 tokens**.

3. **Performance**

    - Quanto mais tokens, mais demorado (e caro).
    - Por isso é útil dar **contexto relevante**, em vez de jogar tudo.

---

## 🔹 Comparação rápida

-   **Tokens = combustível**

    -   Quanto mais tokens, mais informação a IA consegue ler ou gerar.

-   **Prompt longo = mais tokens gastos**
-   **Resposta longa = mais tokens gastos**

---

👉 Em resumo: **tokens são os pedaços de texto que a IA processa.**
Eles definem:

-   **O quanto você pode conversar sem a IA esquecer.**
-   **Quanto vai custar usar o modelo.**

---
