const {
    getTodosLivros,
    getLivroId,
    inserirLivro,
    atualizarLivro,
    deletarLivro
} = require('../services/livros.service')


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
        if (id && Number(id)) {
            const livro = getLivroId(id)
            livro ? res.send(livro) : res.status(422).send("Livro Não encontrado ou ID invalida!")
        } else {
        res.status(404)
        res.send("Livro não encontrado") 
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (livroNovo) {
        inserirLivro(livroNovo)
        res.status(201)
        res.send("Livro adicionado com sucesso")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function updateLivro(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        if (id && Number(id) && body) {
            const atualizacao = atualizarLivro(id, body)
            atualizacao ? res.status(200).send("Livro atualizado com sucesso") : res.status(404).send("Livro não encontrado")
        } else {
            res.status(404).send("Requisição inválida!!")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
function deleteLivro(req, res) {
    try {
        const { id } = req.params
        if (id && Number(id)) {
            const deleteBemSucedido = deletarLivro(id)
            deleteBemSucedido ? res.status(200).send("Livro deletado com sucesso") :  res.status(404).send("Livro não encontrado")
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