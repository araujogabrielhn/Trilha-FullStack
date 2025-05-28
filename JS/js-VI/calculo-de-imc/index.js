function imc(peso, altura) {
    return new Promise((resolve, reject) => {
        if (typeof peso !== 'number' || typeof altura !== 'number') 
            reject ('o argumento precisa ser do tipo numero!')
         else 
            resolve(peso / (altura * altura))
        
    })
}

function mostrarImc(peso, altura) {
    imc(peso, altura)
        .then((resultado) => {
        console.log(`O resultado do IMC foi de ${resultado}`)

        if (resultado < 18.5) console.log('Situação: MAGREZA')
        else if (resultado < 25) console.log('Situação: NORMAL')
        else if (resultado < 30) console.log('Situação: SOBREPESO')
        else if (resultado < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    })
        .catch((err) => {
        console.log(err)
    })

    console.log(`calculando o IMC para peso ${peso} e altura ${altura}...`)
}

mostrarImc(71, 1.74)
mostrarImc(48, 1.60)
mostrarImc(71, "texto")
mostrarImc(82, 1.72)
mostrarImc(120, 1.80)





