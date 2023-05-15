// Exemplo 2

var tabuada = prompt("Digite a Tabuada");
var multiplo = 0

while (multiplo <= 9) {
    multiplo++
    var resultado = (tabuada * multiplo)
    document.write("A TABUADA DO " + tabuada + " X " + multiplo + "=" + resultado + "<br>")

}