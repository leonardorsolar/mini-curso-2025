# Model Context Protocol (MCP)

O **Model Context Protocol (MCP)** é um protocolo aberto desenvolvido pela Anthropic que permite que modelos de linguagem, como o Cursor, se conectem a ferramentas e fontes de dados externas de forma padronizada. Isso facilita a integração com APIs, bancos de dados e outros serviços, sem a necessidade de codificação personalizada para cada integração.

MCP é o protocolo aberto que padroniza como aplicações fornecem contexto para LLMs, transformando modelos isolados em assistentes pradutivos conectados ao mundo real.

---

## Quem está usando MCP?

**Desenvolvimento**

-   Figma
-   Atlassian
-   GitHub

**Produtividade**

-   Notion
-   Zapier
-   Linear

**Infraestrutura**

-   MongoDB
-   Neon
-   Stripe

---

## Arquitetura MCP

**Host (Hospedeiro)**
A aplicação de IA que coordena e gerencia um ou múltiplos clientes MCP.

**Client (Cliente)**
Um componente que mantém a conexão com um servidor MCP e obtém contexto dele para que o host possa utilizar.

**Server (Servidor)**
Um programa que fornece contexto para os clientes MCP.

---

# componentes

### tools (ferramneta)

Funções executáveis para realizar tarefas

Ex.: api calls, escrita de arquivos, cálculos.

### Resources (Recursos): dados estruturados para contexto adicional

Ex.: conteúdos de arquivos, histórico git

### Prompts: templates pre-definidos

Ex.: comandos do slash, opções do menu

# Modos de transporte: stido (processo local) e HTTP/SSE(processo remoto)

### Exemplo

O **Visual Studio Code** atua como um **host MCP**.

-   Quando o VS Code estabelece conexão com um **servidor MCP** (ex.: servidor MCP do Sentry), o runtime do VS Code instancia um **cliente MCP** que mantém essa conexão.
-   Se o VS Code se conecta a outro **servidor MCP** (ex.: servidor de sistema de arquivos local), o runtime instancia **um novo cliente MCP** para essa conexão.
-   Dessa forma, existe uma **relação 1:1 entre clientes MCP e servidores MCP**.

---

### 🔧 Como o MCP Funciona no Cursor

O MCP permite que o Cursor se conecte a sistemas externos e fontes de dados. Em vez de explicar repetidamente a estrutura do seu projeto, você pode integrar diretamente suas ferramentas. Os servidores MCP podem ser escritos em qualquer linguagem que consiga imprimir no `stdout` ou servir um endpoint HTTP, como Python, JavaScript, Go, etc. ([Cursor][1])

Os servidores MCP expõem funcionalidades por meio do protocolo, conectando o Cursor a ferramentas ou fontes de dados externas. O Cursor suporta três métodos de transporte:

-   **stdio**: Execução local no terminal, adequado para uso individual.
-   **SSE (Server-Sent Events)**: Permite comunicação em tempo real com servidores remotos, ideal para múltiplos usuários.
-   **Streamable HTTP**: Comunicação via HTTP com suporte a streaming, também para múltiplos usuários.

Esses métodos permitem que o Cursor interaja com servidores MCP locais ou remotos, acessando dados e executando funções conforme necessário.

---

## 🔧 Integrando o GitHub MCP ao Cursor IDE

### 1. **Obtenha um Token de Acesso Pessoal do GitHub**

Para autenticar o servidor MCP do GitHub, você precisa de um token de acesso pessoal (PAT). Siga os passos abaixo:

-   Acesse [GitHub Personal Access Tokens](https://github.com/settings/tokens).
-   Clique em **Generate new token**.
-   Selecione as permissões necessárias, como `repo` e `workflow`.
-   Clique em **Generate token** e copie o token gerado.

---

### 2. **Configuração no Cursor IDE**

No Cursor IDE, configure o servidor MCP do GitHub:

-   Pressione `Ctrl + Shift + P` para abrir a paleta de comandos.
-   Digite **Open MCP Settings** e selecione a opção correspondente.
-   No arquivo `mcp.json` que se abrirá, substitua o conteúdo pelo seguinte:

```json
{
    "mcpServers": {
        "github": {
            "command": "docker",
            "args": [
                "run",
                "-i",
                "--rm",
                "-e",
                "GITHUB_PERSONAL_ACCESS_TOKEN",
                "ghcr.io/github/github-mcp-server"
            ],
            "env": {
                "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
            }
        }
    }
}
```

-   Substitua `"${input:github_token}"` pelo token de acesso pessoal que você obteve anteriormente.
-   Salve o arquivo.

---

### 3. **Inicie o Servidor MCP**

-   No painel lateral esquerdo do Cursor, em **Tools & Integrations**, localize **MCP Tools**.
-   Clique em **New MCP Server**.
-   Selecione o servidor **github**.
-   Clique no botão para iniciar o servidor.

Após iniciar, o ícone ao lado do servidor deve ficar verde, indicando que está ativo.

---

### 4. **Utilizando o MCP do GitHub**

Agora, você pode interagir com o GitHub diretamente do Cursor IDE. Por exemplo:

-   Digite um comando como **"Criar uma nova issue no repositório meu-repo"**.
-   O Cursor utilizará o servidor MCP do GitHub para executar a ação solicitada.

---

[1]: https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server?utm_source=chatgpt.com "Using the GitHub MCP Server"

### 🛠️ Exemplo Prático: Ciando seu proprio srvidor mcp e Integrando MCP no Cursor

1. **Criação do Servidor MCP**

Primeiro, você precisa criar um servidor MCP que exponha as funcionalidades desejadas. Por exemplo, um servidor em Python que consulta um banco de dados:

```python
# mcp_server.py
import sys
import json

def handle_request(request):
    # Processa a requisição e retorna a resposta
    return {"result": "Dados do banco de dados"}

if __name__ == "__main__":
    request = json.load(sys.stdin)
    response = handle_request(request)
    print(json.dumps(response))
```

2. **Configuração do Cursor**

No Cursor, você configura o servidor MCP como uma ferramenta externa:

```json
{
    "name": "MeuServidorMCP",
    "url": "http://localhost:5000",
    "transport": "stdio"
}
```

3. **Uso no Código**

Agora, no seu código, você pode invocar o servidor MCP para obter dados:

```python
import subprocess
import json

def consultar_mcp():
    request = {"query": "SELECT * FROM tabela"}
    result = subprocess.run(
        ["python", "mcp_server.py"],
        input=json.dumps(request),
        text=True,
        capture_output=True
    )
    response = json.loads(result.stdout)
    return response["result"]

dados = consultar_mcp()
print(dados)
```

Neste exemplo, o código Python consulta o servidor MCP para obter dados de um banco de dados, utilizando o protocolo MCP para comunicação.

---

### ✅ Vantagens do MCP no Cursor

-   **Integração Simplificada**: Conecta-se facilmente a diversas fontes de dados e ferramentas.
-   **Comunicação Padronizada**: Utiliza um protocolo aberto e bem definido.
-   **Suporte a Múltiplos Transportes**: Permite diferentes métodos de comunicação, como `stdio`, SSE e HTTP.
-   **Desenvolvimento Ágil**: Facilita a criação de aplicações que requerem dados externos em tempo real.

Para mais informações e exemplos, você pode consultar a documentação oficial do MCP no Cursor.

---

[1]: https://docs.cursor.com/context/model-context-protocol?utm_source=chatgpt.com "Cursor – Model Context Protocol (MCP)"

https://blog.dsacademy.com.br/model-context-protocol-mcp-para-sistemas-de-ia-generativa-conceito-aplicacoes-e-desafios/
