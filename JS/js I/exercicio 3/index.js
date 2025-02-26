const medida = parseFloat(prompt("Insira uma medida em metros"))

const unidade = prompt(
    "Para qual unidade de medida deseja converter" +
    "\n1. milimetros (mm)" +
    "\n2. centimetros (cm)" +
    "\n3. decimetros (dm)" +
    "\n4. decametros (dam)" +
    "\n5. hectometros (hm)" +
    "\n6. quilometros (km)" 
)

switch (unidade) {
    case "1": 
        alert("resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
        case "2": 
        alert("resultado: " + medida + "m = " + medida * 100 + "cm")
    break
        case "3": 
        alert("resultado: " + medida + "m = " + medida * 10 + "dm")
   break
        case "5": 
        alert("resultado: " + medida + "m = " + medida / 10 + "dam")
    break
        case "5": 
        alert("resultado: " + medida + "m = " + medida / 100 + "hm")
   break
        case "6": 
        alert("resultado: " + medida + "m = " + medida / 1000 + "hm")
    default:
        alert("opcao invalida")
}

    

