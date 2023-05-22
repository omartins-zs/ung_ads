var totalNomes = parseInt(prompt("Digite a quantidade de nomes que serão digitados:"));
var nomes = [];

// Solicita ao usuário para digitar os nomes
for (var i = 1; i <= totalNomes; i++) {
  var nome = prompt("Digite o nome " + i + ":");
  nomes.push(nome);
}

// Exibe os nomes invertidos
for (var i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}