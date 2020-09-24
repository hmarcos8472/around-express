const express = require('express')
const fs = require('fs').promises
const path = require('path')

const cardsRouter = express.Router()

const getFileContent = require('../helper/getfilecontent.js')

const { getCards } = require('../controllers/cardController.js')

pathToData = path.join(__dirname, '..', 'data', 'cards.json')

cardsRouter.get('/cards', getCards)

module.exports = {cardsRouter}
