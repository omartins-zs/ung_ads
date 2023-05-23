function exibirSoma() {
    n1 = document.getElementById("number").value;
    n2 = document.getElementById("number_two").value;
    total = parseInt(n1) + parseInt(n2);

    alert("Irá ser feita a soma");
    document.getElementById("total").value = total;
}

function valorAoQuadrado() {
    alert("Programa para descobrir o valor Quadrado");
    var valor = document.getElementById("number").value;

    if (valor === "") {
        alert("Por favor, digite um valor antes de calcular o quadrado.");
    } else {
        var quadrado = parseFloat(valor) * parseFloat(valor);
        alert("O valor ao quadrado é " + quadrado);
    }
}

function mostrarNome() {
    nomes = ["Jorge", "Luiz", "Fernando", "Cafe", "Leo"];

    document.getElementById("nome").value = nomes[2];
}
