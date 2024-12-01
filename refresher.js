// 1. Declaração de variáveis
let nome = "Ariel"; // pode ser alterada
const idade = 28; // constante
var profissao = "Desenvolvedor"; // antiga forma de declarar

// 2. Tipos de Dados
let numero = 42;
let texto = "Olá, JavaScript!";
let booleano = true;
let nulo = null;
let indefinido;
let objeto = { nome: "Ariel", idade: 28 };

// 3. Funções
function saudacao(nome) {
  return `Olá, ${nome}!.`;
}
console.log(saudacao("Ariel"));

// Arrow function
const soma = (a, b) => a + b;
console.log(`A soma de 3 e 4 é: ${soma(3, 4)}`);

// 4. Condicionais
let nota = 85;
if (nota >= 90) {
  console.log("Nota: A, passou!");
} else if (nota >= 70) {
  console.log("Nota: B, passou!");
} else {
  console.log("Nota: C, reprovou!");
}