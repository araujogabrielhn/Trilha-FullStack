const arr = ["Frodo", "Sam", "Merry", "Pippin", "Aragorn", "Gandalf", "Legolas", "Gimli"]
console.log(arr)

//Adicionar elementos 
//push 

let tamanho = arr.push ("Boromir")
console.log (arr)
console.log(tamanho)

// unshift 
// adicionar elementos no inicio do array

tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// remover elementos 
// pop 

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)


// remover elementos do começo 
// shift

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um elemento 
// includes 
const inclui = arr.includes("Gandalf")
console.log(inclui)


// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar 
// slice 
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat 

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//substituição dos elementos 
// splice 

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//iterar sobre os elementos
for(let indice = 0; indice < sociedade.length; indice++) { 
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}