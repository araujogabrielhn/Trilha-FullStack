let imoveis = []
let opcao = " "


do {
    opcao = prompt(
        "Bem-vindo(a) ao cadastro de imóveis!\n" +
        "Total de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista de imóveis\n3. Sair"
    )

switch (opcao) {
    case "1":
        const imovel = {}

        imovel.proprietario = prompt("informe o nome do prop:")
        imovel.quartos = prompt("Quantos quartos possui o imóvel?")
        imovel.banheiros = prompt("Quantos banhseiros")
        imovel.garagem = prompt("Possui garagem? (Sim/Não")

        const confirmacao = confirm(
            "Salvar este imóvel\n" +
            "\n Proprietário:" + imovel.proprietario +
            "\n Quartos:" + imovel.quartos +
            "\n Banheiros: " + imovel.banheiros +
            "\n Possui garagem?" + imovel.garagem
        )

        if (confirmacao) {
            imoveis.push(imovel)
            alert("Imóvel cadastrado com sucesso")
        } else {
            alert("Voltando ao menu.")
        }

    case "2":
        for (let i = 0; i < imoveis.length; i++) {
            alert(
                "Imovel " + (i+ 1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].banheiros + 
                "\nPossui garagem? " + imoveis[i].garagem
            )
        }
        break
    case "3":
        alert("Encerrando...")
        break
        default:
            alert("Opção inválida!")
}


} while (opcao !== "3")
    alert("Saindo...")




