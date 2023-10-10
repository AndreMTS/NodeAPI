const { getTodosLivros, getLivroId, inserirLivro } = require('../services/livros.service')



function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const { id } = req.params
        const livro = getLivroId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postLivro(req, res) {
    try {
        const livroNovo = req.body
        inserirLivro(livroNovo)
        res.status(201)
        res.send("Livro adicionado com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro
    
}