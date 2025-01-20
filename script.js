function mudarLuz(cor) {
  // Apaga todas as luzes
  document.getElementById("verde").style.backgroundColor = "#555";
  document.getElementById("amarelo").style.backgroundColor = "#555";
  document.getElementById("vermelho").style.backgroundColor = "#555";

  // Acende a luz correspondente
  if (cor === "verde") {
    document.getElementById("verde").style.backgroundColor = "green";
  } else if (cor === "amarelo") {
    document.getElementById("amarelo").style.backgroundColor = "yellow";
  } else if (cor === "vermelho") {
    document.getElementById("vermelho").style.backgroundColor = "red";
  }
}
