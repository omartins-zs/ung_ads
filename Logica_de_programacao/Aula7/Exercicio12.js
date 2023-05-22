var soma = 0;

for (var i = 1; i <= 5; i++) {
  var numero = parseFloat(prompt("Digite o número " + i + ":"));

  soma += numero;
}

var media = soma / 5;

console.log("A soma dos números é:", soma);
console.log("A média dos números é:", media);
