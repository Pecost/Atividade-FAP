var operador = 0;
var numero1 = 0.0;
var numero2 = 0.0;

operador = parseInt(prompt("digite um número para escolhar o operador: (1)soma  (2)divisão  (3)multiplicação  (4))subtração"));

if (operador == 1){
    numero1 = parseFloat(prompt("Digite o primeiro número"));
    numero2 = parseFloat(prompt("Digite o segundo número"));
    resultado = numero1 + numero2;
    resultado = resultado;
    console.log(numero1 + " + " + numero2 + " = " + resultado);
}

if (operador == 2) {
    numero1 = parseFloat(prompt("Digite o número dividendo"));
    numero2 = parseFloat(prompt("Digite o número divisor"));

    if (numero2 === 0) {
        console.log("Não é possível dividir por zero.");
    } else {
        const resultado = Math.floor(numero1 / numero2);
        const resto = numero1 % numero2;
        console.log(numero1 + " / " + numero2 + " = Resultado: " + resultado + ", Resto: " + resto);
    }
}


if (operador == 3){
    numero1 = parseFloat(prompt("Digite o número multiplicador"));
    numero2 = parseFloat(prompt("Digite o número multiplicando"));
    resultado = numero1 * numero2;
    resultado = resultado;
    console.log(numero1 + " * " + numero2 + " = " + resultado);
}

if (operador == 4){
    numero1 = parseFloat(prompt("Digite o número minuendo"));
    numero2 = parseFloat(prompt("Digite o número subtraendo"));
    resultado = numero1 - numero2;
    resultado = resultado;
    console.log(numero1 + " - " + numero2 + " = " + resultado);
}