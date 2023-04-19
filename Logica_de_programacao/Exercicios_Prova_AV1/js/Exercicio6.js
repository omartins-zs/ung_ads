let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o número ${i}: `));
  
  if (numero % 2 === 0) {
    quantidadePares++;
  } else {
    quantidadeImpares++;
  }
}

console.log(`A quantidade de números pares é: ${quantidadePares}`);
console.log(`A quantidade de números ímpares é: ${quantidadeImpares}`);
