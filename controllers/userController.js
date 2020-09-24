const path = require('path')
const fs = require('fs').promises

const getFileContent = require('../helper/getfilecontent.js')

const pathToData = path.join(__dirname, '..', 'data', 'users.json')

function getUsers(req, res) {
  getFileContent(pathToData)
    .then((users) => {
      res.send(users)
    })
    .catch(() => {
      res.status(500).send({ message : "Something Went Wrong..."})
    })
    .catch(() => {
      res.status(404).send({ message : "Requested Resource Was Not Dound..."})
    })
}

function getSingleUser(req, res) {
  getFileContent(pathToData)
    .then((users) => {
      const user = users.find((userName) => userName._id === req.params.id)
      if (user) {
        return res.status(200).send(user)
      }
      return res.status(404).send({ message : "User Does Not Exist" })
    })
    .catch(() => {
      res.status(500).send({ message : "Something Went Wrong..."})
    })
}

module.exports = {getSingleUser, getUsers}
