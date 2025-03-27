let a = 0

let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})


//const a = 0 - false

//const b = null - false 

//const c = "Teste" - true

//console.log(a || b || c)

//console.log(b ?? a)

