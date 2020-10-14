const path = require('path')
const User = require('../models/user.js')

function getUsers(req, res) {
  return User.find({})
    .then(users => {
      res.send(users)
    })
    .catch(() => res.status(500).send({message: "500 Internal server error"}))
};

function getSingleUser(req, res) {
  return User.find({_id: req.params.id})
    .then(user => {
      if (user) {
        return res.status(200).send(user);
      }
      res.status(404).send({message: "The requested user does not exist"});
    })
    .catch(() => res.status(500).send({message: "500 Internal server error"}))
};

function createUser(req, res) {
  const {name, about, avatar} = req.body
  return User.countDocuments({})
  .then(id => {
    return User.create({name, about, avatar, id})
  })
  .then(user => {
    res.status(200).send(user)
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

function updateUserName(req, res) {
  User.findByIdAndUpdate(req.params.id, "name: req.body")
    .then(user => res.send({ data: req.body }))
    .catch((err) => {
      res.status(500).send({ message: "500 Internal server error" });})
};

function updateAvatar(req, res) {
  User.findByIdAndUpdate(req.params.id, "avatar: req.body")
    .then(user => res.send({ data: req.body }))
    .catch((err) => {
      res.status(500).send({ message: "500 Internal server error" });})
};

module.exports = {getSingleUser, getUsers, createUser, updateUserName, updateAvatar}
