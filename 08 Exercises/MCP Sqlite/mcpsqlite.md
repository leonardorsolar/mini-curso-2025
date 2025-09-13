https://www.youtube.com/watch?v=aEDimJAsRBQ
https://executeautomation.github.io/mcp-playwright/docs/intro
https://executeautomation.github.io/mcp-playwright/

https://www.youtube.com/watch?v=FZpUw1p370o

Cursor (SQLite + Playwright).

---

# 🛠️ Tutorial Rápido – MCP no Cursor

## 1. Pré-requisitos

-   Cursor IDE atualizado
-   Node.js e npm instalados
-   Pacotes MCP:

    ```bash
    npm install -g @executeautomation/database-server @executeautomation/playwright-mcp-server
    ```

---

## 2. Configuração no Cursor

Abra **Settings → MCP & Integrations** e adicione:

```json
{
    "mcpServers": {
        "sqlite": {
            "command": "npx",
            "args": [
                "-y",
                "@executeautomation/database-server",
                "/home/seu_usuario/Databases/meu_banco.db"
            ]
        },
        "playwright": {
            "command": "npx",
            "args": ["-y", "@executeautomation/playwright-mcp-server"]
        }
    }
}
```

👉 Troque o caminho do banco (`/home/seu_usuario/Databases/meu_banco.db`) pelo **caminho absoluto** do seu `.db`.

comando: linux: pdw

---

## 3. Reinicie o Cursor

-   Feche e abra o Cursor IDE.
-   No chat, você verá as ferramentas **sqlite** e **playwright** ativas.

---

## 4. Testando o SQLite MCP

No chat do Cursor:

```
Liste as tabelas do banco
```

```
Mostre todos os registros da tabela users
```

```
Crie uma tabela chamada products com id, name e price
```

---

## 5. Testando o Playwright MCP

No chat do Cursor:

```
Abra http://localhost:3001/ e tire um screenshot

http://127.0.0.1:5500/sqlite-mcp/index.html


registro o name Pedro no formulario http://127.0.0.1:5500/sqlite-mcp/index.html
```

```
Clique no primeiro link da página
```

```
Digite "Cursor IDE" na barra de busca do Google
```

---

## 6. Dicas

-   Use **`npx -y`** só para testar. Se for usar sempre → instale global (mais rápido).
-   Sempre use **caminho absoluto** para o SQLite.
-   O Playwright pode abrir uma janela de navegador real (Chromium, Firefox, WebKit).

---

👉 Pronto! Agora o Cursor consegue **falar com seu banco SQLite** e **automatizar navegador com Playwright** direto pelo chat.
