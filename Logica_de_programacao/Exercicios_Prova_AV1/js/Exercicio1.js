let maiorNumero = null;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o número ${i}: `));

  if (maiorNumero === null || numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(`O maior número digitado é: ${maiorNumero}`);
