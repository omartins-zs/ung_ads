let nomeUsuario = prompt("Digite o seu nome de usuário: ");
let senha = prompt("Digite a sua senha: ");

if (nomeUsuario === "Anselmo" && senha === "123456") {
  console.log("Acesso permitido!");
} else {
  console.log("Usuário ou senha incorretos. Acesso negado!");
}
