const App = require("./App")

App.createUser("araujogab@gmail.com", "Gabriel Araujo")
App.createUser("germancano@gmail.com", "German Cano")
App.createUser("pauloganso@gmail.com", "Paulo Ganso")

App.deposit("araujogab@gmail.com", 100)

App.transfer("araujogab@gmail.com", "germancano@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("pauloganso@gmail.com", 2000, 24)

console.table(App.findUser("araujogab@gmail.com"))
console.table(App.findUser("araujogab@gmail.com").account)
console.table(App.findUser("germancano@gmail.com"))
console.table(App.findUser("germancano@gmail.com").account)
console.table(App.findUser("pauloganso@gmail.com"))
console.table(App.findUser("pauloganso@gmail.com").account)