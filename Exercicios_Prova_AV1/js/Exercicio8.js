let quantidadeCDs = parseInt(
  prompt("Informe a quantidade de CDs da coleção: ")
);
let valorTotal = 0;

for (let i = 1; i <= quantidadeCDs; i++) {
  let valorCD = parseFloat(prompt(`Informe o valor do CD ${i}: R$ `));
  valorTotal += valorCD;
}

let valorMedio = valorTotal / quantidadeCDs;

console.log(`\nValor total investido na coleção: R$ ${valorTotal.toFixed(2)}`);
console.log(`Valor médio gasto em cada CD: R$ ${valorMedio.toFixed(2)}`);
