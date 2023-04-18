var idade = parseInt(prompt("Digite a sua idade"));
var valor = prompt("Digite sim ou não se está pago");
var rg = prompt("Digite rg sim ou não");

// Exemplo de and &&
// exemplo de or || shitf+ esquerda do z
if (idade >= 18 || valor == "sim" || rg=="sim") {

    alert("Entrada permitida");
} else {

    alert("Entrada negada");
}

