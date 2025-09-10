# Prompt Engineering

# 📝 Template de Prompt com Engenharia de Prompt

**Persona:**
Você é \[defina quem a IA deve ser → ex.: professor, programador, consultor de marketing, pesquisador acadêmico, etc.].

**Contexto:**
\[Explique brevemente a situação em que a tarefa será usada → ex.: aula para iniciantes, material para clientes, estudo para TCC, etc.].

**Tarefa:**
\[Descreva claramente o que você quer que a IA faça → ex.: escrever um programa em Python que verifica números primos, criar um plano de aula, gerar uma campanha de marketing].

**Regras:**

-   \[Liste restrições → ex.: linguagem simples, evitar termos técnicos, usar Python, limitar a 200 palavras, citar fontes, etc.].
-   \[Adicione condições extras se houver → ex.: usar Markdown, comentar o código, etc.].

**Formato da Resposta:**

-   \[Defina a forma como a resposta deve vir → ex.: em tópicos, em forma de tabela, código seguido de explicação, resumo no final].

**Exemplo (opcional):**
Entrada → \[coloque uma entrada de exemplo]
Saída esperada → \[mostre como gostaria que a resposta viesse].

https://promptengineering.org/what-is-prompt-engineering/

# estrutura de um prompt avançado

https://www.youtube.com/watch?v=ysPbXH0LpIE

Perfeito, essa imagem mostra a **estrutura de um prompt avançado**.
Ela organiza os elementos que você pode (ou deve) incluir em um prompt para guiar a IA de forma clara e consistente.

Vamos por partes:

---

## 🔹 Estrutura do Prompt (Prompt Structure)

### **1. Task context (Contexto da tarefa)**

Explica **quem é a IA e o que ela deve fazer**.
Exemplo da imagem:

> "Você será um orientador de carreira chamado Joe, criado pela empresa AdAstra Careers."

---

### **2. Tone context (Tom da resposta)**

Define o estilo de linguagem e tom que a IA deve usar.
Exemplo:

> "Mantenha um tom amigável de atendimento ao cliente."

---

### **3. Background data, documents, and images (Dados de fundo)**

Fornece **documentos, informações de apoio ou imagens** que a IA deve considerar.
Exemplo:

> "Aqui está o guia de carreira que você deve usar ao responder: {{DOCUMENT}}."

---

### **4. Detailed task description & rules (Descrição detalhada + regras)**

Explica regras de comportamento.
Exemplo:

-   Sempre fale como "Joe".
-   Se não entender, diga "Desculpe, não entendi. Pode repetir a pergunta?".
-   Se for irrelevante, responda: "Sou Joe e dou conselhos de carreira."

---

### **5. Examples (Exemplos)**

Mostra **como a IA deve responder** em situações reais.
Exemplo:

```
Usuário: Oi, como você foi criado?
Joe: Olá! Meu nome é Joe, e fui criado pela AdAstra Careers para dar conselhos de carreira.
```

---

### **6. Conversation history (Histórico da conversa)**

Inclui o que já foi dito antes, para manter **continuidade e contexto**.
Exemplo:

```
<history> {{HISTORY}} </history>
```

---

### **7. Immediate task description or request (Pedido imediato)**

A pergunta atual do usuário.
Exemplo:

```
<question> {{QUESTION}} </question>
```

---

### **8. Thinking step by step (Raciocínio passo a passo)**

Instrui a IA a pensar antes de responder.
Exemplo:

> "Pense sobre sua resposta antes de responder."

---

### **9. Output formatting (Formato da saída)**

Define como a resposta deve ser entregue.
Exemplo:

```
<response> Sua resposta aqui </response>
```

---

### **10. Prefilled response (Resposta pré-preenchida, se houver)**

Opcionalmente, você pode já dar um modelo de resposta.
Exemplo:

```
<response> Olá! Estou aqui para ajudar com conselhos de carreira. </response>
```

---

## 🔹 Resumindo:

Esse modelo mostra como um **bom prompt não é só uma pergunta** — é quase um **roteiro** com:

-   papel da IA,
-   tom,
-   regras,
-   dados extras,
-   exemplos,
-   histórico,
-   formatação da saída.

Isso é **Context Engineering na prática**: dar **tudo que a IA precisa** para entregar respostas consistentes e úteis.
