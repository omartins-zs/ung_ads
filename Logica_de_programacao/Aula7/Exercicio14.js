var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (numero1 < numero2) {
  for (var i = numero1 + 1; i < numero2; i++) {
    console.log(i);
  }
} else {
  for (var i = numero1 - 1; i > numero2; i--) {
    console.log(i);
  }
}
