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

// 5. Loops
let numeros = [1, 2, 3, 4, 5];
// For loop
for (let i = 0; i < numeros.length; i++) {
  console.log(`Número ${numeros[i]}`);
}

// For...of
for (let num of numeros) {
  console.log(`For...of: ${num}`);
}

// While
let contador = 0;
while (contador < 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}

// 6. Arrays
let frutas = ["Maçã Verde", "Banana", "Uva"];
frutas.push("Jaca"); // Adiciona
frutas.pop(); // Remover o último
console.log(`Lista de frutas: ${frutas.join(", ")}`);

// 7. Objetos
let pessoa = {
  nome: "Ariel",
  idade: 28,
  falar: function () {
    return `Nome: ${this.nome}. Idade: ${this.idade} anos.`;
  },
};
console.log(pessoa.falar());

// 8. Manipulação de Strings
let mensagem = "O café está pronto!";
console.log(mensagem.toUpperCase()); // Tudo maiúsculo
console.log(mensagem.includes("café")); // Verifica se contém "café"

// 9. Manipulação de Datas
let dataAtual = new Date();
console.log(`Hoje é: ${dataAtual.toLocaleDateString()}`);

// 10. Promises e Async/Await
const promessa = new Promise((resolve, reject) => {
  let sucesso = true; // se false = reject
  setTimeout(() => {
    if (sucesso) {
      resolve("Promessa cumprida!");
    } else {
      reject("Promessa rejeitada.");
    }
  }, 1000);
});

promessa
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.error(erro));

// Async/await
async function executarPromessa() {
  try {
    let resultado = await promessa;
    console.log(`Async/Await: ${resultado}`);
  } catch (erro) {
    console.error(`Async/Await: ${erro}`);
  }
}
executarPromessa();

console.log("Fim! 🚀");