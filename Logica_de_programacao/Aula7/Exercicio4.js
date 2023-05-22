var totalIdades = parseInt(prompt("Digite o número total de idades:"));
var maioresIdade = 0;
var menoresIdade = 0;

// Solicita ao usuário para digitar as idades
for (var i = 1; i <= totalIdades; i++) {
  var idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));

  if (idade >= 18) {
    maioresIdade++;
  } else {
    menoresIdade++;
  }
}

console.log("Quantidade de pessoas maiores de idade:", maioresIdade);
console.log("Quantidade de pessoas menores de idade:", menoresIdade);

// let palavra = prompt("Digite uma palavra:");

// let novaPalavra = "";

// for (let i = palavra.length - 1; i >= 0; i--) {
//     novaPalavra += palavra[i];
// }

// document.write(novaPalavra);
