let pessoa = {
    nome: "Gab",
    idade: 27,
    dizerOla () {
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()