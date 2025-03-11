const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = 'Olá, mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
   // input.type = input.type !== 'radio' ? 'radio' : 'text'
   input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'digita algo...'
})

document.getElementById('disable').addEventListener('click', function*(){
    input.setAttribute('disable', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log("o valor do atributo data-something é: " + data)
    input.dataset.something = 'algum outro valor'
    console.log("o valor do atributo data-something agora é: " + input.dataset.somethingElse)
})