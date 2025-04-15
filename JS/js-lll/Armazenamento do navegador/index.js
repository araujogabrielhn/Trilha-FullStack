document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
  })

  document.getElementById('readSession').addEventListener('click', function (){
    const info = sessionStorage.getItem('info')
    alert("a informação salva é: " + info)
  })


document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const t = localStorage.getItem('text')
    alert("O texto salvo no Local Storage: " + t)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // cookieName = value; expires = UTCStringDate; path=/
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025, 3, 13) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    // cookieName = value; expires = UTCStringDate; path=/
    const cookie = 'tect=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025, 8, 13) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})
