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

# MCPS mais usuais para dev:

-

-   https://cursor.directory/

-   https://github.com/punkpeye/awesome-mcp-servers

tutoriais:
https://cursorideguide.com/guides/github-mcp-setup-guide

## Github mcp server

https://docs.cursor.com/en/tools/mcp

1- Enconte github

# Database

tutorial 1:
https://executeautomation.github.io/mcp-database-server/
https://executeautomation.github.io/mcp-database-server/docs/getting-started

## context7

-   https://github.com/upstash/context7
    MCP remoto
    Consegue acessar documentação de projeto em tempo real
    ex.: Veja lá a documentação do react e ajuste para mim este componente.

    Como Instalar no cursor:

    1- https://github.com/upstash/context7 > Install in Cursor
    2-

## shadcn MCP

O servidor MCP shadcn permite que assistentes de IA interajam com itens de registros. Você pode navegar pelos componentes disponíveis, pesquisar por componentes específicos e instalá-los diretamente no seu projeto usando linguagem natural.

-   https://ui.shadcn.com/docs/mcp
    Ex.:Por exemplo, você pode pedir a um assistente de IA para "Criar uma landing page usando componentes do registro acme" ou "Encontrar um formulário de login no registro shadcn".

O Model Context Protocol (MCP) é um protocolo aberto que permite que assistentes de IA se conectem com segurança a fontes de dados e ferramentas externas. Com o servidor MCP shadcn, seu assistente de IA obtém acesso direto a:

Navegar por componentes - Listar todos os componentes, blocos e modelos disponíveis de qualquer registro configurado
Pesquisar em Registros - Encontre componentes específicos por nome ou funcionalidade em várias fontes
Instalar com linguagem natural - Adicione componentes usando prompts de conversação simples, como "adicionar um formulário de login"
Suporte para múltiplos registros - Acesse registros públicos, bibliotecas de empresas privadas e fontes de terceiros

### Como funciona

O servidor MCP atua como uma ponte entre seu assistente de IA, registros de componentes e o CLI do shadcn.

Conexão de registro - O MCP se conecta a registros configurados (shadcn/ui, registros privados, fontes de terceiros)
Linguagem Natural - Você descreve o que precisa em inglês simples
Processamento de IA - O assistente traduz sua solicitação em comandos de registro
Entrega de componentes - Os recursos são obtidos e instalados em seu projeto

Bilbioteca:https://ui.shadcn.com/

## Playwright MCP

Api que abrirá seu browser e fará ações

-   https://github.com/microsoft/playwright-mcp

E se você pudesse descrever essas tarefas em inglês simples? "Preencha este formulário de contato com os detalhes da nossa empresa" ou "Acesse a página de problemas do GitHub e verifique se há bugs rotulados como 'críticos'". Agentes de IA agora podem entender essas instruções e traduzi-las em ações no navegador.

Um agente de IA é alimentado por um modelo de linguagem de grande porte (LLM) que pode analisar suas instruções em linguagem natural e descobrir as etapas necessárias para concluir uma tarefa. Mas, para interagir com sites, o agente precisa de ferramentas para controlar o navegador.

Site:https://playwright.dev/agents

### Para que posso usá-lo

O Playwright MCP é uma ferramenta versátil e útil tanto para desenvolvedores quanto para qualquer pessoa que queira automatizar seus fluxos de trabalho baseados na web.

Para Desenvolvimento:

Gerar testes: peça a um agente para criar testes do Playwright para você. "Gere um teste que adicione um item ao carrinho de compras e finalize a compra."
Explore seu site: use o agente para navegar em seu site, entender sua estrutura e propor possíveis casos de teste.
Para automação:

Automatize tarefas repetitivas: preencha formulários, baixe relatórios ou execute qualquer outro processo de várias etapas em um site.
Extração de dados: extraia informações de páginas da web e resuma-as.

## Zen-mcp-server

-   https://github.com/BeehiveInnovations/zen-mcp-server

Orquestração de IA para Claude Code - Um servidor de Protocolo de Contexto de Modelo que oferece à CLI de sua escolha (por exemplo, Claude Code ) acesso a vários modelos de IA para análise de código aprimorada, resolução de problemas e desenvolvimento colaborativo. O Zen funciona com Claude Code, Gemini CLI, Codex CLI e outros.

Ex.: Usando zen mcp, faça um refactor com gemini e o3 para usar as melhores práticas de programação.

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

# Modos de transporte: stdio (processo local) e HTTP/SSE(processo remoto)

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
