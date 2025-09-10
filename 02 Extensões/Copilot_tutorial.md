Perfeito! Vamos criar um **roteiro similar**, mas agora voltado para o **GitHub Copilot Free no VS Code**. Mantendo o mesmo estilo didático que você usou para o Gemini CLI:

---

# Roteiro: Introdução ao GitHub Copilot Free no VS Code

## O que é o GitHub Copilot?

O **GitHub Copilot** é uma extensão de inteligência artificial desenvolvida pela GitHub e OpenAI que sugere linhas de código ou trechos completos diretamente no **Visual Studio Code**.
Ele pode:

-   Escrever código em várias linguagens (JavaScript, Python, C#, etc.)
-   Completar funções ou métodos
-   Sugerir trechos de teste
-   Ajudar a refatorar código
-   Gerar documentação básica

**Vantagens principais**:

-   Gratuito para estudantes ou contas pessoais (Copilot Free)
-   Funciona diretamente no **VS Code**
-   Aprende com o contexto do seu código
-   Suporta múltiplas linguagens e frameworks populares
-   Integração com GitHub para acelerar commits e pull requests

---

## Como o Copilot funciona

1. Você digita código ou comentários no VS Code.
2. O **Copilot sugere** trechos de código baseados no contexto.
3. Você pode aceitar, rejeitar ou modificar a sugestão.
4. Funciona com **atalhos e comandos internos** do VS Code para controlar as sugestões:

-   `Tab` → aceita a sugestão
-   `Esc` → ignora a sugestão
-   `Ctrl+Enter` ou `Cmd+Enter` → mostra mais opções

> Diferente do Gemini CLI, o Copilot **não é um terminal**: ele atua dentro do editor VS Code, interagindo diretamente com os arquivos.

---

## Como instalar o Copilot Free no VS Code

### 1. Pré-requisitos

-   VS Code atualizado
-   Conta **GitHub** (pessoal ou educacional)
-   Conexão com a internet

### 2. Instalação

#### a) Pelo VS Code Marketplace

1. Abra o VS Code
2. Acesse **Extensões** (ícone de quadrado à esquerda ou `Ctrl+Shift+X`)
3. Busque por `GitHub Copilot`
4. Clique em **Instalar**

#### b) Ativando o Copilot

1. Faça login com sua conta GitHub
2. Confirme que está usando a versão Free (pessoal ou educacional)

---

## Como usar no VS Code

### 1. Escrevendo código : Sugestões de Código

no vascode crie uma arquivo:

Se tiver instalado o node: test.js
Se tiver instlado o java: test.java
Se tiver isntlado o python: test.py

-   Comece a digitar uma função ou comentário descritivo
-   O Copilot sugerirá linhas automaticamente

Exemplo em javascript:

```javascript
// Função para somar dois números
function somar(a, b) {
```

O Copilot pode sugerir:

```javascript
  return a + b;
}
```

-   Aceite com `Tab`
-   Ignore com `Esc`

### 2. Comentários como prompts : GitHub Copilot pode gerar trechos de código

Você também pode **descrever a função em um comentário**, e o Copilot gera o código:

```javascript
// Função para buscar usuário por ID no banco de dados
```

-   Sugestão automática: função completa com query simulada

### 3. Refatoração e melhorias

-   Coloque o cursor sobre o código
-   Pressione `Ctrl+.` → Copilot sugere melhorias ou refatoração
-   Aceite ou modifique a sugestão

### 4- Depuração de Código

---

## Comandos e atalhos úteis

-   `Alt+\[` ou `Alt+\]` → navegar entre sugestões
-   `Ctrl+Enter` → abrir painel de sugestões
-   `Ctrl+Shift+P → Copilot` → lista todos os comandos do Copilot
-   `/` → inserir comandos inline (dependendo da configuração)

---

Perfeito! Vamos separar e explicar **cada modo do GitHub Copilot** de forma clara, porque são três funcionalidades distintas: **Agent**, **Ask** e **Edit**.

---

## 1️⃣ Modo **Agent**

-   É o **modo inteligente do Copilot** que age como um assistente “ativo” dentro do VS Code.
-   Ele **sugere código automaticamente** baseado no contexto do seu projeto e nos arquivos abertos.
-   Funciona em **background**, observando o que você escreve e propondo linhas ou blocos de código.

**Exemplo:**
Você começa a escrever uma função em JavaScript:

```javascript
function calcularMedia(notas) {
```

O **modo Agent** pode automaticamente sugerir:

```javascript
  const total = notas.reduce((a, b) => a + b, 0);
  return total / notas.length;
}
```

---

## 2️⃣ Modo **Ask**

-   É o **modo de pergunta direta** ao Copilot.
-   Você faz **uma pergunta ou descreve uma tarefa** e o Copilot responde com código ou explicação.
-   É ótimo quando você quer **uma resposta específica**, em vez de esperar sugestões automáticas.

**Exemplo de Ask:**

```javascript
// Copilot, escreva uma função para filtrar números pares de um array
```

O Copilot responde com o código correspondente:

```javascript
function filtrarPares(arr) {
    return arr.filter((num) => num % 2 === 0)
}
```

---

## 3️⃣ Modo **Edit**

-   É o **modo de edição assistida**.
-   Você seleciona **um trecho de código existente** e pede ao Copilot para **refatorar, melhorar ou adicionar funcionalidades**.
-   Ele sugere mudanças **inline**, e você pode aceitar ou rejeitar.

**Exemplo de Edit:**

Código original:

```javascript
function somar(a, b) {
    return a + b
}
```

Prompt de Edit:

```text
Copilot, transforme esta função para validar se os parâmetros são números
```

Sugestão gerada:

```javascript
function somar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Parâmetros devem ser números")
    }
    return a + b
}
```

---

### Resumindo

| Modo      | Função principal                            | Exemplo de uso                              |
| --------- | ------------------------------------------- | ------------------------------------------- |
| **Agent** | Sugestões automáticas baseadas no contexto  | Completar função enquanto você digita       |
| **Ask**   | Pergunta direta, gera código ou explicação  | “Escreva função para filtrar números pares” |
| **Edit**  | Refatoração ou melhoria de código existente | “Adicione validação de tipos nesta função”  |

---

## Atividades complementares:

1. Criar função para calcular a média de notas e aceitar a sugestão do Copilot
2. Pedir que o Copilot gere um teste unitário para essa função
3. Refatorar um componente React usando Copilot
4. Implementar uma nova feature sugerida pelo Copilot e rodar o projeto
