/* Try, Catch e Finally */


function soma(a, b) {
    const primeiroNumero = Number(a)
    const segundoNumero = Number(b)

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        throw new Error('os argumentos devem ser dois números')
    }

    return primeiroNumero + segundoNumero
}

try {
    console.log(soma(2, 9))
    console.log(soma(true, 14))
    /*console.log(soma(undefined, 22))*/   
    console.log(soma(18, "0"))
    console.log(soma(39, null))
    /*console.log(soma(13, "zero"))*/
} catch (error) {
    console.log("Um erro ocorreu!")
    console.log(error.message)
} finally {
    console.log("Terminou o cálculo!")
}

