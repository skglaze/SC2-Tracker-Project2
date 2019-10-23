const express = require('express')

const userApi = require('../models/user.js')
const opponentApi = require('../models/opponent')

const userRouter = express.Router()

userRouter.get('/users/new', (req, res) => {
  res.render('userViews/newUserForm')
})

//get all
userRouter.get('/users', (req, res) => {
  userApi.getAllUsers()
    .then((users) => {
      res.render('userViews/users', { users })
    })
})

//get one
userRouter.get('/users/:userId', (req, res) => {
  userApi.getOneUser(req.params.userId)
    .then((user) => {
      opponentApi.getAllOpponentsByUserId(req.params.id)
        .then((userOpponents) => {
          res.render('opponentViews/opponent', (user, userOpponents))
        })
    })
})

//create one
userRouter.post('/users', (req, res) => {
  userApi.addNewUser(req.body)
    .then((newUser) => {
      res.redirect(`/users/${newUser._id}`)
    })
})

//delete one
userRouter.delete('/users/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((deletedUser) => {
      res.redirect('/users')
    })
})

module.exports = {
  userRouter
}
