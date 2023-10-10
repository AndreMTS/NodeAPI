const { log } = require('console')
const fs = require('fs')

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroId(id) {
    const livros =  JSON.parse( fs.readFileSync("livros.json"))
    return livroFiltrado = livros.filter(livro => livro.id === id)[0]
}

function inserirLivro(livroNovo) {
    const livros =  JSON.parse( fs.readFileSync("livros.json"))
    const NovalistaLivros = [...livros, livroNovo]
    console.log(livroNovo);
    fs.writeFileSync('livros.json', JSON.stringify(NovalistaLivros))

}

module.exports = {
    getTodosLivros,
    getLivroId,
    inserirLivro
}