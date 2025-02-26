const numero = prompt("Insira um numero:");

let resultado = " "

for (let fator = 1; fator <= 100; fator++) {
    resultado += "\nResultado: " + numero * fator
}

alert(resultado)


