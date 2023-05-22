var n1 = parseInt(prompt("Digite um numero"));
var n2 = parseInt(prompt("Digite um numero"));
var n3 = parseInt(prompt("Digite um numero"));
var n4 = parseInt(prompt("Digite um numero"));
var n5 = parseInt(prompt("Digite um numero"));

numeros = [n1, n2, n3, n4, n5]

numeros.forEach((item) => console.log("O quadrado de " + item + " é " + (item ** 2)));
