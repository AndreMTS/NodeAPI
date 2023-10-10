const { Router } = require('express')
const { getLivros, getLivro, postLivro, updateLivro } = require('../controllers/livros.controller')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', updateLivro)

router.delete('/', (req, res) => {
    res.send('Requesição do tipo DELETE')
})

module.exports = router