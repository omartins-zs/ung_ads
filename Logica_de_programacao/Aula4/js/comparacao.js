var salario = parseFloat(prompt("Dgite seu salario"));
if (salario < 1700) {
    alert("Desconto de 18%");
    var total = salario - salario * 0.18;
} else if (salario < 2500) {
    alert("Desconto de 23%");
} else {
    alert("Desconto de 29%");
}
