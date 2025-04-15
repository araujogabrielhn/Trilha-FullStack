const Address = require("./Address");
const Person = require("./Person");


const addr = new Address("4 de Novembro", 24, "Centro", "RJ", "Rio de Janeiro")
const Gab = new Person("Gab Araujo", addr)


console.log(Gab)
console.log(Gab.address.fullAddress())