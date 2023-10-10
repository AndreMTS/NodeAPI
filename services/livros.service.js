const fs = require('fs')

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroId(id) {
    const livros =  JSON.parse( fs.readFileSync("livros.json"))
    return livroFiltrado = livros.filter(livro => livro.id === id)[0]
}

module.exports = {
    getTodosLivros,
    getLivroId
}