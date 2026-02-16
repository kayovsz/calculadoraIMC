const input = require('prompt-sync')(); //adiciona a biblioteca prompt-sync para ler a entrada do usuário

let nome, altura, peso, imc, classificacao;

console.log("Olá, bem vindo à calculadora de IMC.");

// validação do nome - apenas letras, sem números
do { // comeco do loop para validar o nome, caso seja invalido, ele volta para o começo
    console.log("Para começar, qual o seu nome? ");
    nome = input(""); // Pede o nome do usuário
    
    // verifica se o nome é vazio OU se tem números
    if (nome.trim() === "" || /[0-9]/.test(nome)) {
        // .trim() remove espaços do início/fim
        // /[0-9]/.test() procura por qualquer número (0-9) no nome. REGEX
        console.error("Erro: Nome inválido. Digite apenas letras.");
    }
    // enquanto o nome for vazio ou tiver números, volta pro "do" e pede novamente
} while (nome.trim() === "" || /[0-9]/.test(nome));

// validação de altura - número positivo
do {
    console.log("Agora, me diga sua altura em metros");
    altura = parseFloat(input());
    if (altura <= 0 || isNaN(altura)) { //isNaN verifica se o valor não é um número
        console.error("Erro: Altura inválida! Insira um número positivo.");
    }
} while (altura <= 0 || isNaN(altura)); // enquanto a altura for menor ou igual a 0 ou não for um número, repete o loop

// validação de peso - número positivo
do {
    console.log("Por fim, me diga seu peso em kg");
    peso = parseFloat(input());
    if (peso <= 0 || isNaN(peso)) {
        console.error("Erro: Peso inválido! Insira um número positivo.");
    }
} while (peso <= 0 || isNaN(peso));

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

console.log(nome + ", seu IMC é de " + parseFloat(imc).toFixed(2) + " e é considerado " + classificacao); //junta tudo