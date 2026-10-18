// 1. Conexão com o JavaScript - 0,05 ponto
console.log("Meu primeiro script foi executado!");

// 2. Instruções e comentários - 0,05 ponto
console.log("Nome do projeto: Lojinha do Gui");
console.log(10 + 5); // Operação matemática simples
console.log("A atividade começou com sucesso!");

// 3. Variáveis com const e let - 0,10 ponto
const nomeProjeto = "Lojinha do Gui";
const descricao = "Catálogo de produtos com cálculo de pedidos";

// let: pode ser reatribuído (usado em dados que mudam).
let quantidadeProdutos = 5;
quantidadeProdutos = 6; // alteração do valor

console.log(`${nomeProjeto} possui ${quantidadeProdutos} produtos no catálogo.`);

// 4. var como contexto histórico - 0,05 ponto
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// 5. Tipos de dados - 0,10 ponto
const titulo = "Lojinha do Gui";          // string
const quantidade = 6;                     // number
const ativo = true;                       // boolean
const observacao = null;                  // null

console.log(titulo);
console.log(quantidade);
console.log(ativo);
console.log(observacao);

// 6. Operadores - 0,15 ponto
const precoUnitario = 25;
const quantidadePedido = 2;

const total = precoUnitario * quantidadePedido;       // multiplicação
const soma = 5 + 3; // adição (soma)
const compLe = (precoUnitario <= 25); // comparação <=
const compIgual = (quantidadePedido === 2); // ===
const compDif = (quantidadePedido !== 1); // !==
const compMaior = (total > 40); // >
const compMenor = (quantidade < 10); // <
const compMaiorIgual = (total >= 40); // >=
const compMenorIgual = (quantidade <= 10); // <=
const desconto = 0;
const precoFinal = total - desconto;                  // subtração
const precoMedio = total / quantidadePedido;          // divisão
const precoMedioArredondado = Math.round(precoMedio); // comparação por arredondamento
const freteGratis = total >= 40;                      // comparação >=
const estoqueDisponivel = !(quantidadeProdutos === 0); // comparação !== / !

console.log("Total do pedido:", total);
console.log("Preço final com desconto:", precoFinal);
console.log("Preço médio por unidade:", precoMedioArredondado);
console.log("Frete grátis?", freteGratis);
console.log("Estoque disponível?", estoqueDisponivel);

// 7. Strings e template literals - 0,10 ponto
const cliente = "Ana";
const produtoCompra = "Caderno";
const valor = 25;

const mensagem = `Olá, ${cliente}! Você comprou ${quantidadePedido} x ${produtoCompra} no valor total de R$ ${valor}.`;

console.log(mensagem);

// 8. Decisão com if e else - 0,15 ponto
const nota = 7;
const aprovado = nota >= 6;

if (aprovado) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

// Verificação com valor falso (caminho falso)
const nota2 = 4;
if (nota2 >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

// 9. Interface com Bootstrap - feito no index.html
// Navbar, hero, cards, badge, button, alert e footer.

// 10. Desafio integrador - 0,10 ponto
const produto = "Caderno";
const preco = 25;
const quantidadeDesafio = 2;
const totalPedido = preco * quantidadeDesafio;

console.log(`Pedido: ${quantidadeDesafio} x ${produto}. Total: R$ ${totalPedido}.`);

const freteGratisDesafio = totalPedido >= 40;
if (freteGratisDesafio) {
  console.log("Frete grátis aplicado!");
} else {
  const frete = 8.90;
  const totalComFrete = totalPedido + frete;
  console.log(`Frete pago (R$ ${frete}). Total com frete: R$ ${totalComFrete}.`);
}