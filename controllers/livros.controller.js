const { getTodosLivros, getLivroId } = require('../services/livros.service')



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

module.exports = {
    getLivros,
    getLivro
    
}