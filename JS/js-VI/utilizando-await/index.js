async function asyncSum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('argumentos precisam ser do tipo numero')
    }
    return a + b
}

async function execute () {
    try {
        const result = await asyncSum (50, null)
        console.log(result)
    } catch (erro) {
        console.log(erro)
    }
    const result = await asyncSum(50, 33)
    console.log(result)
}

execute()