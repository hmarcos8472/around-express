const express = require('express')
const path = require('path')

const cardsRouter = express.Router()

const { getCards } = require('../controllers/cardController.js')

cardsRouter.get('/cards', getCards)

module.exports = {cardsRouter}
