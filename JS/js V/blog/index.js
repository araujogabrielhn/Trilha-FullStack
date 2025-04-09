const Author = require("./Author")

const Gab = new Author("Gabriel Araujo")

const post = Gab.writePost("Título do Post", "Sou tricolor. Laialaia")

post.addComment("Germano Cano", "Faz o LL!")
post.addComment("Arias", "Faz o rock \m/")

console.log(Gab)
console.log(post)