var nome = prompt("Digite o produto");
var valor = parseFloat(prompt("Digite o valor"));
var qtde = parseInt(prompt("Digite a qtde"));

var total = valor * qtde;
if (total >= 100) {
    alert("Desconto de 10%");
    document.write("Total sem desconto " + total);
    var descl = total - total * 10;
} else {
    alert("Desconto de 5%");
}
