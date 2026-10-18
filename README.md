# Lojinha do Gui

## Nome e tema do projeto
- **Nome do projeto:** Lojinha do Gui
- **Tema:** Catálogo de produtos (loja virtual simples com cálculo de pedidos)

O projeto une uma interface visual com Bootstrap e a lógica do JavaScript ES6, de modo que a tela (catálogo de produtos) e os exemplos de código (cálculo de pedidos) trabalham em conjunto.

## Explicação da interface criada
A tela de `index.html` possui:
- **Navbar** com o nome do projeto e links de navegação;
- **Hero** com título e descrição do catálogo;
- **5 cards** (Caderno, Lápis, Borracha, Estojo, Calculadora), cada um com nome, preço e botão “Adicionar ao carrinho”;
- **Alert** com dica sobre o frete grátis;
- **Badge** e **botão** para reforçar a ação do pedido;
- **Footer** com créditos.

O layout é responsivo: usa `container`, `row` e `col` do Bootstrap, que organizam os cards em uma grade que se adapta a tablets e celulares.

## Componentes Bootstrap utilizados
| Componente | Uso |
|---|---|
| `navbar` | Cabeçalho com o nome do projeto e navegação |
| `container` / `row` / `col` | Layout responsivo |
| `card` | Apresentação dos produtos (nome, preço, botão) |
| `badge` | Indicador da promoção de frete grátis |
| `button` | Botão “Finalizar pedido” e botões de cada produto |
| `alert` | Mensagem de dica com descrição do frete grátis |
| `footer` | Rodapé com os créditos |

## Diferença entre `let`, `const` e `var`

| Declaração | Escopo | Redeclaração | Reatribuição | Recomendação |
|---|---|---|---|---|
| `let` | Bloco `{ ... }` | Não | Sim | O ideal para variáveis que mudam |
| `const` | Bloco `{ ... }` | Não | Não | O ideal para valores fixos |
| `var` | Função (e escopo global, por hoisting) | Sim | Sim | Evitar; apenas contextualização histórica |

No código, `const` foi usado para valores fixos (nome do projeto, preço, estado de pulsos) e `let` para o contador `quantidadeProdutos`, que passou de 5 para 6. O `var` só aparece no item 4 para demonstrar a declaração antiga, conforme a base do curso.

## Tipos de dados utilizados
- **string** — `titulo`, `nomeProjeto`, `produto`, `cliente`;
- **number** — `quantidade`, `preco`, `total`;
- **boolean** — `ativo`, `freteGratis`, `aprovado`, `estoqueDisponivel`;
- **null** — `observacao`.

## Explicação da condição criada com `if/else`
Na atividade 8, verificou-se se um aluno foi aprovado:
```js
const aprovado = nota >= 6;

if (aprovado) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}
```
A condição usa o operador `>=` (comparação). Como `nota` é `7`, o caminho verdadeiro executa e exibe `"Aprovado"`; com `nota2 = 4`, o caminho falso exibe `"Precisa revisar"`.

No desafio integrador (item 10), a mesma lógica foi aplicada ao frete: o frete é **grátis quando o total do pedido é maior ou igual a R$ 40,00**:
```js
const freteGratis = totalPedido >= 40;
if (freteGratis) {
  console.log("Frete grátis aplicado!");
} else {
  const frete = 8.90;
  const totalComFrete = totalPedido + frete;
  console.log(`Frete pago (R$ ${frete}). Total com frete: R$ ${totalComFrete}.`);
}
```

## Maior dificuldade encontrada
A principal dificuldade foi entender a distinção prática entre `let` e `const`, e saber *quando cada um deveria ser usado* em um projeto real, e não apenas memorizar a sintaxe.

## Como a dificuldade foi resolvida
Pesquisando a documentação oficial do JavaScript e testando os códigos no Console do navegador, confirmei que:
- `const` protege o valor de reatribuição — ideal para configurações e preços;
- `let` serve para contadores e variáveis que vão mudar ao longo do fluxo;
- `var`, embora funcione, escapa ao escopo de bloco e **sobe** (hoisting) para a função, o que pode causar bugs difíceis de achar. Por isso, a boa prática atual é usar `let`/`const` e evitar `var`.

## Organização do projeto
```
atividade-js-bootstrap/
├── index.html
├── script.js
└── README.md
```

## Como executar
1. Baixe os três arquivos.
2. Abra `index.html` no navegador (duplo-clique).
3. Abra o Console do navegador (`F12` → aba **Console**) e veja as mensagens de cada exercício.
4. Nos arquivos, siga o marcação de exercícios (1 a 10) para ver a numeração do avaliação.
