var nota1 = 0.0;
var nota2 = 0.0;
var nota3 = 0.0;
var soma = 0.0;
var media = "";

nota1 = parseFloat(prompt("Digite a primeira nota"));
nota2 = parseFloat(prompt("Digite a segunda nota"));
nota3 = parseFloat(prompt("Digite a terceira nota"));

soma = nota1 + nota2 + nota3;
media = soma / 3;

media = media.toFixed(1);

console.log("Sua média é: " + media);