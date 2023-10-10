const { getAllBooks } = require('../services/livros')



function getLivros(req, res) {
    try {
        const livros = getAllBooks()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}