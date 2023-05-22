var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

var soma = 0;

if (numero1 < numero2) {
  for (var i = numero1 + 1; i < numero2; i++) {
    console.log(i);
    soma += i;
  }
} else {
  for (var i = numero1 - 1; i > numero2; i--) {
    console.log(i);
    soma += i;
  }
}

console.log("A soma dos números é:", soma);
