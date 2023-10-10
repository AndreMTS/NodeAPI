const express = require('express')
const rotaLivro = require('./router/livro.router')

const app = express()

app.use('/livros', rotaLivro)

const port = 8000


app.listen(port, () => {
    console.log('listening on port' + port)
})