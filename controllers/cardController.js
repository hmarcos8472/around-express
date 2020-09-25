const path = require('path')

const getFileContent = require('../helper/getfilecontent.js')
const pathToData = path.join(__dirname, '..', 'data', 'cards.json')

function getCards(req, res) {
  getFileContent(pathToData)
    .then((cards) => {
      res.send(cards)
    })
    .catch(() => {
      res.status(500).send({ message : "Something Went Wrong..."})
    })
    .catch(() => {
      res.status(404).send({ message : "Requested Resource Was Not Dound..."})
    })
}

module.exports = {getCards}
