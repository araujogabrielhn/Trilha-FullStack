function Game (title, rank, genre)  {
    this.title = title
    this.rank = rank
    this.genre = genre
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = save = function () {}
}

const sekiro = new Game ("Sekiro", 1, "Souls Like/Samurai")

const monsterHunter = new Game ("Caçador de Monstros", 5, "Aventura")

const darkSouls3 = new Game ("Almas sebosas 3", 3, "SoulsLike/Medieval")

const eldenRing = new Game ("Anel do Éder", 2, "SoulsLike/Medieval(famosa DLC do Dark Souls 3")

const blasphemous = new Game ("Blasfemia", 4, "MetroidVania numa pegada SoulsLike")

console.log(sekiro, monsterHunter, darkSouls3, eldenRing, blasphemous)

