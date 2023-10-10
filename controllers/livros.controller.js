const { getTodosLivros, getLivroId, inserirLivro, atualizarLivro, deletarLivro } = require('../services/livros.service')



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
function updateLivro(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const atualizacaoBemSucedida = atualizarLivro(id, body)
        if (atualizacaoBemSucedida) {
            res.status(200).send("Livro atualizado com sucesso")
        } else {
            res.status(404).send("Livro não encontrado")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
function deleteLivro(req, res) {
    try {
        const { id } = req.params

        const deleteBemSucedido = deletarLivro(id)

        if (deleteBemSucedido) {
            res.status(200).send("Livro atualizado com sucesso")
        } else {
            res.status(404).send("Livro não encontrado")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    updateLivro,
    deleteLivro
}