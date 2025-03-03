const veiculo1 = prompt("informe o nome do primeiro veiculo")
const velocidade1 = parseFloat(prompt("informe a velocidade do primeiro veículo"))

const veiculo2 = prompt("informe o nome do segundo veiculo")
const velocidade2 = parseFloat(prompt("informe a velocidade do segundo veículo"))


if (velocidade1 > velocidade2) {
    alert(veiculo1 + "é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veículo2 + "é mais rápido do que" + veiculo1)
} else  {
    alert(veiculo1 + "é" + veiculo2 + "possuem a mesma velocidade")
}



