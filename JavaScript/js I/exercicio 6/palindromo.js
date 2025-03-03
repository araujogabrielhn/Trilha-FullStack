const palavra = prompt("Digite uma palavra")
let palavraInvertida = " " 

for (let indice = palavra.length - 1; indice >= 0; indice--) {
    palavraInvertida += palavra[indice]
}

if (palavra === palavraInvertida) { 
    alert(palavra + "é um palindromo")
} else { 
    alert(palavra + "não é um palindromo!\n" + palavra + " !== " + palavraInvertida)
}   

