### Testes de Frontend (UI)

1. Loading

    - Com network lenta (DevTools), abrir Home.
    - Esperado: skeletons visíveis (grid de placeholders) e botão "Adicionar Produto" skeleton.

2. Estado vazio

    - Com DB sem produtos, Home deve mostrar ícone de caixa, mensagem "Nenhum produto cadastrado" e botões "Recarregar" e "Adicionar Produto".

3. Erro de rede

    - Parar backend e recarregar Home.
    - Esperado: alerta de erro com mensagem amigável e botão "Tentar novamente" que refaz a requisição.

4. Recarregar lista

    - Com backend ativo, clicar "Recarregar" deve atualizar a lista (ver pelo Network e pela mudança dos cards quando houver dados).

5. Formulário — validação

    - Abrir "Adicionar Produto".
    - Submeter com campos vazios → mensagens de erro por campo (nome/descrição obrigatórios, preço positivo, SKU obrigatório).
    - `price` com valor inválido (texto, negativo) → erro.

6. Criar produto — sucesso

    - Preencher dados válidos e submeter.
    - Esperado: modal fecha; card aparece na grid; `sku` exibido em badge; preço em BRL.

7. Formato de preço

    - Cards devem exibir `R$ 1.234,56` (locale `pt-BR`, `BRL`).

8. Proxy Vite

    - Ver no Network: requisições para `/api/products` (caminho relativo). Não deve haver host hardcoded.

9. Duplicidade de SKU pela UI

    - Tentar cadastrar `sku` já existente.
    - Esperado: erro apresentado no console/toast/log da submissão (o hook retorna 400) e feedback de falha (o modal permanece aberto; ver console e não inclusão do card).

10. Acessibilidade/UX rápida

-   Foco no primeiro campo ao abrir modal.
-   Navegação por teclado (Tab/Shift+Tab) entre inputs e botões.
-   Botões têm rótulos/ícones com `sr-only` adequados (ex.: close do modal).

---
