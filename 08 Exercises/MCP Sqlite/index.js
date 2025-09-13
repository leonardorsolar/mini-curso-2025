const express = require("express")
const Database = require("better-sqlite3")
const path = require("path")
const cors = require("cors")

const app = express()
const PORT = 3001

// Conectar ao banco de dados SQLite
const db = new Database(path.join(__dirname, "users.db"))

// Middleware para parsing JSON
app.use(express.json())
// Habilitar CORS para integrações com páginas externas
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    })
)

// Rota para listar todas as tabelas
app.get("/tables", (req, res) => {
    try {
        const tables = db
            .prepare("SELECT name FROM sqlite_master WHERE type='table'")
            .all()
        res.json(tables)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para listar todos os usuários
app.get("/users", (req, res) => {
    try {
        const users = db.prepare("SELECT * FROM users").all()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para buscar usuário por ID
app.get("/users/:id", (req, res) => {
    try {
        const { id } = req.params
        const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id)

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para criar novo usuário
app.post("/users", (req, res) => {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ error: "Nome é obrigatório" })
        }

        const stmt = db.prepare("INSERT INTO users (name) VALUES (?)")
        const result = stmt.run(name)

        res.status(201).json({
            id: result.lastInsertRowid,
            name: name,
            message: "Usuário criado com sucesso",
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para atualizar usuário
app.put("/users/:id", (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ error: "Nome é obrigatório" })
        }

        const stmt = db.prepare("UPDATE users SET name = ? WHERE id = ?")
        const result = stmt.run(name, id)

        if (result.changes === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        res.json({
            id: parseInt(id),
            name: name,
            message: "Usuário atualizado com sucesso",
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota para deletar usuário
app.delete("/users/:id", (req, res) => {
    try {
        const { id } = req.params
        const stmt = db.prepare("DELETE FROM users WHERE id = ?")
        const result = stmt.run(id)

        if (result.changes === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        res.json({ message: "Usuário deletado com sucesso" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Rota raiz com informações da API
app.get("/", (req, res) => {
    res.json({
        message: "API SQLite com Express",
        endpoints: {
            "GET /tables": "Lista todas as tabelas do banco",
            "GET /users": "Lista todos os usuários",
            "GET /users/:id": "Busca usuário por ID",
            "POST /users": "Cria novo usuário (body: {name})",
            "PUT /users/:id": "Atualiza usuário (body: {name})",
            "DELETE /users/:id": "Deleta usuário",
        },
    })
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
    console.log("Endpoints disponíveis:")
    console.log("- GET /tables - Lista tabelas")
    console.log("- GET /users - Lista usuários")
    console.log("- GET /users/:id - Busca usuário")
    console.log("- POST /users - Cria usuário")
    console.log("- PUT /users/:id - Atualiza usuário")
    console.log("- DELETE /users/:id - Deleta usuário")
})

// Fechar conexão com o banco quando o processo terminar
process.on("SIGINT", () => {
    db.close()
    console.log("\nConexão com banco fechada. Servidor encerrado.")
    process.exit(0)
})
