const { Router } = require('express')
const { getLivros, getLivro, postLivro } = require('../controllers/livros.controller')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Requesição do tipo PACHT')
})

router.delete('/', (req, res) => {
    res.send('Requesição do tipo DELETE')
})

module.exports = router