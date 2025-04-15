const user = {
    name: "Gab Araujo",
    email: "araujogabrielhn@gmail.com",
    friends: [{
        name: "Math",
        adress: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 27,
    phone: {
        countryCode: "+55",
        ddd: "61",
        number: "666666"
    }
}

// console.log(user.friends[0].phone.ddd)
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.lenght)

console.log(user.brothers?.[5].name)