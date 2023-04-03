// Declaração de Variaveis

// Exemplo 1

// // Aluno tipo STRING
// var aluno = "Gabriel Matheus";

// // Notas tipo INT
// let nota1 = 5
// let nota2 = 9
// let nota3 = 8
// let nota4 = 7
// let nota5 = 8

// var media = (nota1+nota2+nota3+nota4+nota5) / 5;

// console.log(media);
// document.write("O aluno "+ aluno + " obteve a média " + media)



// Exemplo 2

// var aluno = prompt("Digite o nome do aluno");

// // "parseFloat" Converte String em numero float com "."
// let nota1 = parseFloat(prompt("Digite a nota 1"));
// let nota2 = parseFloat(prompt("Digite a nota 2"));
// let nota3 = parseFloat(prompt("Digite a nota 3"));
// let nota4 = parseFloat(prompt("Digite a nota 4"));
// // Sem o parseFloat obtem media errada faz contatenação e soma de strings

// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// document.write("O aluno " + aluno + " tem a média " + media)



// Exemplo 3

var aluno = prompt("Digite o nome do aluno");

// "parseFloat" Converte String em numero float com "."
let nota1 = parseFloat(prompt("Digite a nota 1"));
let nota2 = parseFloat(prompt("Digite a nota 2"));
let nota3 = parseFloat(prompt("Digite a nota 3"));
let nota4 = parseFloat(prompt("Digite a nota 4"));
// Sem o parseFloat obtem media errada faz contatenação e soma de strings

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    document.write("O aluno " + aluno + " foi Aprovado")
    console.log("Aprovado");

} else {
    document.write("O aluno " + aluno + " foi Reprovado")
    console.log("Reprovado");
}