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
    if (livroNovo) {
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        const NovalistaLivros = [...livros, livroNovo]
        console.log(livroNovo);
        fs.writeFileSync('livros.json', JSON.stringify(NovalistaLivros, null, 2))
        return true
    } else {
        return false
    }

}
function atualizarLivro(id, body) {

    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const index = livros.findIndex(livro => livro.id === id)

    if (index !== -1) { 

        livros[index] = { ...livros[index], ...body }
        fs.writeFileSync('livros.json', JSON.stringify(livros, null, 2))

        return true
    } else {
        return false
    }
}
function deletarLivro(id) {

    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const index = livros.findIndex(livro => livro.id === id)

    if (index !== -1) { 

        const livrosAtualizados = livros.filter(livro => livro.id !== id);
        fs.writeFileSync('livros.json', JSON.stringify(livrosAtualizados, null, 2))
    return true
    
} else {

        return false
    }
}

module.exports = {
    getTodosLivros,
    getLivroId,
    inserirLivro,
    atualizarLivro,
    deletarLivro
}