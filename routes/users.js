const express = require('express')
const fs = require('fs').promises
const path = require('path')

const usersRouter = express.Router()

const getFileContent = require('../helper/getfilecontent.js')
const { getSingleUser, getUsers } = require('../controllers/userController.js')

const pathToData = path.join(__dirname, '..', 'data', 'users.json')

usersRouter.get('/users', getUsers)

usersRouter.get('/users/:id', getSingleUser)

module.exports = {usersRouter}
