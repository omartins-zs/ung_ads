var numeros = [10, 5, 8, 12, 3]; // Array com os números

// Assumimos que o primeiro número é o maior
var maiorNumero = numeros[0];

for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log("O maior número é:", maiorNumero);
