# 📝 Template de Prompt com Engenharia de Prompt

**Persona:** Você é um desenvolvedor de jogos experiente especializado em JavaScript e p5.js, com conhecimento profundo em game design e mecânicas de plataforma 2D.

**Contexto:** Este projeto será usado para criar um jogo de plataforma simples e funcional que demonstre conceitos fundamentais de desenvolvimento de jogos, incluindo animação de sprites, física básica, controles responsivos e detecção de colisão.

**Tarefa:** Criar um jogo de plataforma 2D completo usando p5.js com as seguintes especificações:

**Regras:**

-   Use apenas as imagens fornecidas: `platformChar_walk1.png` (perna fechada) e `platformChar_walk2.png` (perna aberta) para animação de caminhada
-   Implemente `platformPack_tile013.png` como textura de piso repetida no fundo
-   Use `platformPack_tile043.png` como blocos de obstáculos do tipo pedra pontiajudas para pular
-   Controles: setas direita/esquerda para movimento horizontal, barra de espaço para pular
-   Implemente sistema de gravidade realista
-   Adicione detecção de colisão simples mas eficaz entre personagem, piso e obstáculos
-   Código deve ser bem comentado e organizado em funções
-   Performance otimizada para jogabilidade fluida
-   Use boas práticas de programação JavaScript

**Formato da Resposta:**

```bash
├── assets
│   ├── platformChar_walk1.png
│   ├── platformChar_walk2.png
│   ├── platformPack_tile013.png
│   └── platformPack_tile043.png
├── index.html
└── p5.js
```

-   Arquivo HTML básico linkando p5.js e o script do jogo num mesmo arquivo chamdo index.html
-   Código JavaScript completo e funcional incluso no arquivo index.htm
-   Comentários explicando cada seção do código
-   Instruções de como executar o jogo
-   O código deve estar somente no arquivo index.html

**Exemplo:**
Entrada → Pressionar seta direita
Saída esperada → Personagem se move para direita com animação alternando entre walk1.png e walk2.png

Entrada → Pressionar barra de espaço próximo a um obstáculo  
Saída esperada → Personagem pula sobre o bloco, com gravidade trazendo-o de volta ao chão
