const { Router } = require('express')
const { getLivros } = require('../controllers/livros')

const router = Router()

router.get('/', getLivros)

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