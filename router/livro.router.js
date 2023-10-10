const { Router } = require('express')

const { 
    getLivros,
    getLivro,
    postLivro,
    updateLivro,
    deleteLivro
} = require('../controllers/livros.controller')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', updateLivro)

router.delete('/:id', deleteLivro)

module.exports = router