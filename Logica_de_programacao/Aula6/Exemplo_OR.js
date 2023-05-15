// Sintaxe "||" é o operador lógico "OR"
// Ele retorna verdadeiro se pelo menos uma das condições for verdadeira
// Se uma condição for verdadeira já retorna True

// Verifica se o usuário tem CNH ou passaporte válido
let temCNH = true;
let temPassaporteValido = false;

if (temCNH || temPassaporteValido) {
    console.log("Acesso permitido!");
} else {
    console.log("Acesso negado!");
}