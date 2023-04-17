let idade1 = parseInt(prompt("Digite a primeira idade: "));
let idade2 = parseInt(prompt("Digite a segunda idade: "));
let idade3 = parseInt(prompt("Digite a terceira idade: "));

let maiorIdade = idade1;

if (idade2 > maiorIdade) {
  maiorIdade = idade2;
}

if (idade3 > maiorIdade) {
  maiorIdade = idade3;
}

console.log(`A maior idade digitada é: ${maiorIdade}`);
