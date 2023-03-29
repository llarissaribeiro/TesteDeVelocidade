const veiculo01 = prompt("Qual é nome do primeiro veículo?")
const velocidade01 = prompt("Qual a sua velocidade?")
const veiculo02 = prompt("Qual é o nome do segundo veículo?")
const velocidade02 = prompt("Qual a sua velocidade?")


alert(
  "Teste de velocidade" + "\n" +
  "\n" + veiculo01 + " = " + velocidade01 + "km/h" + 
  "\n" + veiculo02 + " = " + velocidade02 + "km/h" 
)

if (velocidade01 > velocidade02) {
  alert("O " + veiculo01 + " é mais rápido")
} else if(velocidade01 < velocidade02){
  alert("O " + veiculo02 + " é mais rápido");
} else{
  alert("Os dois veículos possuem a mesma velocidade");
}


