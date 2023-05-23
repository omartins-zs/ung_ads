function exibirSoma() {
  n1 = document.getElementById("number").value;
  n2 = document.getElementById("number_two").value;
  total = parseInt(n1) + parseInt(n2);

  alert("Irá ser feita a soma");
  document.getElementById("total").value = total;
}
