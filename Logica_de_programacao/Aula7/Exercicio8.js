var soma = 0;
var contador = 0;
var numero = 0;

while (contador < 50) {
  if (numero % 2 === 0) {
    soma += numero;
    contador++;
  }
  numero++;
}

console.log("A soma dos primeiros 50 números pares é:", soma);
