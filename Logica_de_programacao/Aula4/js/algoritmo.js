var produto = prompt("Digite o produto: ");
var valor = parseFloat(prompt("Digite o valor: "));
var quantidade = parseInt(prompt("Digite a quantidade"));
var resultado = valor * quantidade;

if (resultado >= 100) {
  resultado *= 0.1;
  alert("Você adquiriu 10% de desconto ");

  document.write("Essa e a quantidade do desconto em R$ "+ resultado+ ',00');
} else {
  alert("Você recebeu 5% de desconto ");
}
