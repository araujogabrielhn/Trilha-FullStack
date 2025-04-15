
let saldo = prompt("Informe a quantiade de dinheiro inicial")

let opcao = ""

do {
    opcao = prompt ( 
    "Saldo disponível: R$ " + saldo + 
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
)

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado:") )
            break
        case "2":
            saldo -= prompt("Informe o valor a ser removido:")
        break
        case "3":
            alert("saindo...")
            break
            default:
                alert("Entrada inválida!")
    }
} while (opcao !== "3")