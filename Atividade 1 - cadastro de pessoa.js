var nome = "";
var salario = 0.0;
var idade = 0;
var possuiDiploma = "";

nome = prompt("Digite seu nome:");
salario = parseFloat(prompt("Digite o valor do seu salário:"));
idade = parseInt(prompt("Digite sua idade?"));
possuiDiploma = prompt("Possui diploma?");

console.log("Nome: " + nome);
console.log("Salário: " + salario);
console.log("Idade: " + idade);
console.log("Possui diploma: " + possuiDiploma);