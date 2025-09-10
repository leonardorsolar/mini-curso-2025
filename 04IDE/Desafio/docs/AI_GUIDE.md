# AI_GUIDE.md

---

## Project Overview

This is a monorepo containing multiple backend and frontend options for the "IA para Devs" course. The project demonstrates API connectivity between frontend and backend with real-time health monitoring across different technology stacks.

**Available Configurations:**

-   **Frontend:** Vite + React with Tailwind CSS and shadcn/ui components
-   **Backend Options:**
    -   Node.js/TypeScript with Express
    -   Java with Spring Boot
    -   Python with FastAPI + Poetry

---

## Architecture

**Monorepo Structure:**

-   `@frontend/app` → React + Vite frontend with Tailwind CSS and shadcn/ui components
-   `@backend/express` → Express API server (TypeScript) with CORS enabled
-   `@backend/spring` → Spring Boot API server (Java) with CORS enabled
-   `@backend/fastapi` → FastAPI server (Python) with Poetry dependency management
-   Root workspace managed with **appropriate package managers**

**Key Integration:**

-   Frontend polls backend `/health` endpoint every 5 seconds
-   Live API status indicator in UI (green/red/yellow dot)
-   All backends expose the same API contract for seamless switching
-   Default ports: Express (3005), Spring Boot (8080), FastAPI (8000)

---

## Development Commands

### Node.js/Express Backend

**Start Development:**

```bash
npm run dev           # Start both frontend and backend
npm run dev:frontend  # Start frontend only (Vite dev server)
npm run dev:backend   # Start backend only (Express with tsx or nodemon)
```

**Build:**

```bash
npm run build          # Build all packages
npm run build:frontend # Build frontend (Vite)
npm run build:backend  # Build backend (TypeScript compiler)
```

**Code Quality:**

```bash
npm run lint           # Run ESLint across all packages
npm run format         # Format code with Prettier
npm run test           # Run tests (when available)
```

### Java/Spring Boot Backend

**Prerequisites:**

```bash
# Install Java 17+ and Maven
java -version  # Should be 17+
mvn -version   # Apache Maven 3.6+
```

**Start Development:**

```bash
# Navigate to Spring Boot backend
cd @backend/spring

# Run with Maven
mvn spring-boot:run

# Or build and run JAR
mvn clean package
java -jar target/ai-devs-api-0.0.1-SNAPSHOT.jar
```

**Configuration:**

```bash
# application.properties or application.yml
server.port=8080
spring.profiles.active=dev

# CORS configuration is included in WebConfig
# Health endpoint available at: http://localhost:8080/health
```

### Python/FastAPI Backend

**Prerequisites:**

```bash
# Install Python 3.9+ and Poetry
python --version  # Should be 3.9+
poetry --version  # Poetry dependency manager
```

**Start Development:**

```bash
# Navigate to FastAPI backend
cd @backend/fastapi

# Install dependencies with Poetry
poetry install

# Activate virtual environment
poetry shell

# Run development server
poetry run uvicorn main:app --reload --port 8000

# Or run directly
python -m uvicorn main:app --reload --port 8000
```

**Poetry Commands:**

```bash
poetry add <package>        # Add dependency
poetry add --dev <package>  # Add dev dependency
poetry show                 # List dependencies
poetry update              # Update dependencies
poetry run pytest         # Run tests
```

---

## Technology Stack

**Frontend (`@frontend/app`):**

-   React 19 + Vite 7
-   Tailwind CSS 4 + shadcn/ui
-   ESLint + Prettier

**Backend Options:**

**Express (`@backend/express`):**

-   Express 5 + TypeScript 5
-   CORS enabled
-   Nodemon or tsx for hot reload
-   Strict TypeScript configuration

**Spring Boot (`@backend/spring`):**

-   Java 17+ with Spring Boot 3.x
-   Spring Web + Spring Boot Actuator
-   Maven build system
-   CORS configuration included
-   Health endpoint with custom response format

**FastAPI (`@backend/fastapi`):**

-   Python 3.9+ with FastAPI
-   Poetry for dependency management
-   Uvicorn ASGI server
-   CORS middleware enabled
-   Pydantic for request/response models

---

## API Contract

All backends implement the same API endpoints for compatibility:

**Health Check:**

```http
GET /health
Response: {
  "status": "OK",
  "timestamp": "2025-01-15T10:30:00Z",
  "service": "ai-devs-api"
}
```

**Additional Endpoints (implement as needed):**

```http
GET /api/status     # Service status
POST /api/data      # Submit data
GET /api/data/:id   # Retrieve data
```

---

## File Structure Conventions

```
project-root/
├── @frontend/app/           # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── @backend/
│   ├── express/            # Node.js/Express backend
│   │   ├── src/
│   │   └── package.json
│   ├── spring/             # Java/Spring Boot backend
│   │   ├── src/main/java/
│   │   ├── src/main/resources/
│   │   └── pom.xml
│   └── fastapi/           # Python/FastAPI backend
│       ├── app/
│       ├── main.py
│       └── pyproject.toml
└── package.json           # Root workspace
```

**Frontend:**

-   Components → `.jsx` or `.tsx`
-   Tailwind CSS v4 with CSS-first config
-   Use `@import 'tailwindcss'` instead of legacy `@tailwind` directives

**Backends:**

-   Express → `.ts` with strict typing
-   Spring Boot → `.java` with standard Spring conventions
-   FastAPI → `.py` with type hints and Pydantic models

---

## Development Notes

**Server Configuration:**

| Backend     | Default Port | Health Endpoint              |
| ----------- | ------------ | ---------------------------- |
| Express     | 3005         | http://localhost:3005/health |
| Spring Boot | 8080         | http://localhost:8080/health |
| FastAPI     | 8000         | http://localhost:8000/health |

**Frontend Configuration:**

-   Runs on port `5173` (Vite default)
-   Configure backend URL in environment variables:
    ```bash
    VITE_API_URL=http://localhost:3005  # Express
    VITE_API_URL=http://localhost:8080  # Spring Boot
    VITE_API_URL=http://localhost:8000  # FastAPI
    ```

**CORS Configuration:**
All backends include CORS headers to allow frontend communication from `http://localhost:5173`.

**Tailwind CSS v4:**

-   Uses `@tailwindcss/vite` plugin
-   `@theme` directive for theming with shadcn/ui

---

## IDE Configuration for Cursor

**Recommended Extensions:**

-   **Multi-language support:** ES7+ React/Redux/React-Native snippets, Extension Pack for Java, Python extension
-   **Code quality:** ESLint, Prettier, SonarLint
-   **Development:** Thunder Client (API testing), GitLens

**Workspace Settings (`.vscode/settings.json`):**

```json
{
    "java.configuration.updateBuildConfiguration": "automatic",
    "python.defaultInterpreterPath": "./poetry/bin/python",
    "typescript.preferences.includePackageJsonAutoImports": "auto",
    "tailwindCSS.experimental.configFile": "tailwind.config.js"
}
```

**Debugging Configuration:**

-   Node.js/Express: Use built-in Node.js debugger
-   Java/Spring Boot: Use Java debugger with Maven integration
-   Python/FastAPI: Use Python debugger with Poetry environment

---

## Quick Start Guide

1. **Choose your backend technology**
2. **Clone and setup:**

    ```bash
    git clone <repository>
    cd project-root
    ```

3. **Setup frontend:**

    ```bash
    cd @frontend/app
    npm install
    ```

4. **Setup your chosen backend:**

    **Express:**

    ```bash
    cd @backend/express
    npm install
    npm run dev
    ```

    **Spring Boot:**

    ```bash
    cd @backend/spring
    mvn clean install
    mvn spring-boot:run
    ```

    **FastAPI:**

    ```bash
    cd @backend/fastapi
    poetry install
    poetry run uvicorn main:app --reload
    ```

5. **Start frontend:**

    ```bash
    cd @frontend/app
    npm run dev
    ```

6. **Verify integration:** Check that the health indicator shows green in the frontend UI.
