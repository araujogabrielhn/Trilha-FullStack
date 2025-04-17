module.exports = class Database { 
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookstoStock(bookName, quantity) {
        const book = this.findBookByname(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removebooksFromStock
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === bookName)
    }

    savePoster(poster) {
        const posterExists = this.findposterByname(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(book)
        }
    }

    addPosterstoStock(posterName, quantity) {
        const poster = this.findposterByname(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity) {
        const book = this.findPosterByname(posterName)
        poster?.removePostersFromStock
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder (order) {
        this.#storage.orders.push()
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.user)
        console.table(this.#storage.orders.map(order => order.data))

    }
}