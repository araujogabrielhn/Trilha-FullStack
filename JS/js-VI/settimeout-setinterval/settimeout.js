console.log("Programa iniciado!")

const timeoutId = setTimeout(() => {
    console.log("3 segundos se passadam desde que o programa foi iniciado.")
}, 1000 * 3) 

clearTimeout(timeoutId) 