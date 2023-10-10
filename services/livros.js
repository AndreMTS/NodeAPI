const fs = require('fs')

function getAllBooks() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

module.exports = {
    getAllBooks
}