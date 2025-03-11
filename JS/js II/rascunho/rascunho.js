const turista = prompt("Qual o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("você visitou alguma cidade?")

while (continuar === "Sim") {
    let cidade = prompt("qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade?")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)