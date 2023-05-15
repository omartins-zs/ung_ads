// Exemplo avançado + com muito codigo

var tabuada = prompt("Digite a Tabuada");
var topico = "Essa e a tabuada do " + tabuada
var multiplo = 0

document.write(topico + "<br>")
while (multiplo <= 9) {
    multiplo++
    var resultado = (tabuada * multiplo)
    document.write(tabuada + " x " + multiplo + " = " + resultado + "<br>")

} 