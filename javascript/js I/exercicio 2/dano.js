
const atacante = prompt("Escreva o nome do atacante")
const poderDeAtaque = parseFloat(prompt("Escreva o poder de ataque"))

const defensor = prompt ("Escreva o nome do defensor")
let pontosDeVida = parseFloat(prompt("quantos pontos de vida ele possui"))
const poderDeDefesa = parseFloat(prompt ("Escreva o poder de defesa"))
const possuiEscudo = prompt("ele possui escudo? (Sim/Nao")

let danoCausado = 0



if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Nao") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeDefesa > poderDeAtaque && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado


alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)

