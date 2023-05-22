var numeros = [];

for (var i = 0; i < 5; i++) {
  var numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}

// (...) Usado para passar os argumentos de maneira separada para o Math
var maiorNumero = Math.max(...numeros);

console.log("O maior número é:", maiorNumero);