// Sintaxe "||" é o operador lógico "OR"
// Ele retorna verdadeiro se pelo menos uma das condições for verdadeira
// Se uma condição for verdadeira já retorna True

// Verifica se o usuário tem CNH ou passaporte válido
// let temCNH = true;
// let temPassaporteValido = false;

// if (temCNH || temPassaporteValido) {
//     console.log("Acesso permitido!");
// } else {
//     console.log("Acesso negado!");
// }

let idade = prompt("Qual é a sua idade?");
let possuiCNH = confirm("Você possui CNH?");

if (idade >= 18 || possuiCNH) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}