let idade = parseInt(prompt("Digite a sua idade: "));
let sexo = prompt("Digite o seu sexo (M ou F): ");

if (sexo === "F" && idade >= 21) {
  console.log("Parabéns, você tem acesso ao desconto vip na balada!");
} else {
  console.log("Infelizmente, você não tem acesso ao desconto vip na balada.");
}
