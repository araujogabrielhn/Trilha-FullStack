class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this. email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login realizado com sucesso!")
        } else {
            console.log("Falha ao fazer login! Email ou senha incorretos.")
        }
    }
}

const Gab = new User ("Gabriel Araujo", "araujogabrielhn@gmail.com", "666666")

console.log(Gab)
Gab.login("araujogabrielhn@gmail.com", "666666")

