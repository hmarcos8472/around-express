const express = require('express')
const path = require('path')

const usersRouter = express.Router()

const { getSingleUser, getUsers } = require('../controllers/userController.js')

usersRouter.get('/users', getUsers)

usersRouter.get('/users/:id', getSingleUser)

module.exports = {usersRouter}
