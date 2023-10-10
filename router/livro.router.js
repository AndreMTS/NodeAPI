const { Router } = require('express')
const { getLivros, getLivro } = require('../controllers/livros.controller')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req, res) => {
    res.send('Requesição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Requesição do tipo PACHT')
})

router.delete('/', (req, res) => {
    res.send('Requesição do tipo DELETE')
})

module.exports = router