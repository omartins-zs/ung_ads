dataDigitada = prompt("Digite uma data nesse formato DD/MM/YYYY");

dataSeparada = dataDigitada.split("/");

console.log("O dia digitado foi " + dataSeparada[0]);

console.log("O mês digitado foi " + dataSeparada[1]);

console.log("O ano digitado foi " + dataSeparada[2]);
