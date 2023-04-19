let quantidadeTurmas = parseInt(prompt("Digite a quantidade de turmas: "));
let totalAlunos = 0;

for (let i = 1; i <= quantidadeTurmas; i++) {
  let quantidadeAlunos = parseInt(prompt(`Digite a quantidade de alunos da turma ${i}: `));
  
  while (quantidadeAlunos > 40) {
    quantidadeAlunos = parseInt(prompt("A turma não pode ter mais de 40 alunos. Digite novamente a quantidade de alunos da turma ${i}: "));
  }
  
  totalAlunos += quantidadeAlunos;
}

let mediaAlunosPorTurma = totalAlunos / quantidadeTurmas;

console.log(`A média de alunos por turma é: ${mediaAlunosPorTurma}`);
