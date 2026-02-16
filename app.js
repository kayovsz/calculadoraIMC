const input = require('prompt-sync')(); //adiciona a biblioteca prompt-sync para ler a entrada do usuário

let nome, altura, peso, imc, classificacao;

console.log("Olá, bem vindo à calculadora de IMC.");
console.log("Para começar, qual o seu nome?");
nome = input("");

console.log("Agora, me diga sua altura em metros");
altura = parseFloat(input()).toFixed(2); //parseFloar converte de string para número decimal

console.log("Por fim, me diga seu peso");
peso = parseFloat(input()).toFixed(2);

imc = (peso / (altura * altura)).toFixed(2); //toFixed para limitar o número de casas decimais a 2 depois da vírgula

if (imc < 18.5) {
    classificacao = "abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "peso normal";
}   else if (imc >= 25 && imc < 30) {
    classificacao = "sobrepeso";
} else if (imc >= 30 && imc < 35) {
    classificacao = "obesidade grau 1";
} else if (imc >= 35 && imc < 40) {
    classificacao = "obesidade grau 2";
}   else {
    classificacao = "obesidade grau 3";
}

console.log(nome + ", seu IMC é: " + parseFloat(imc).toFixed(2) + " e é considerado " + classificacao); //junta tudo