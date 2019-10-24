const express = require('express')

const userApi = require('../models/user.js')
const opponentApi = require('../models/opponent.js')

const userRouter = express.Router()

userRouter.get('/users/new', (req, res) => {
  res.render('userViews/newUserForm')
})

//get all
userRouter.get('/users', (req, res) => {
  userApi.getAllUsers()
    .then((users) => {
      res.render('userViews/allUsers', { users })
    })
})

//get one
userRouter.get('/users/:userId', (req, res) => {
  userApi.getOneUser(req.params.userId)
    .then((user) => {
      opponentApi.getAllOpponentsByUserId(req.params.userId)
        .then((userOpponents) => {
          res.render('userViews/user', { user, userOpponents })
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

//update
userRouter.get('/users/edit/:userId', (req, res) => {
  userApi.getOneUser(req.params.userId)
    .then((user) => {
      res.render('userViews/editUserForm', { user })
    })
})

userRouter.put('/users/:userId', (req, res) => {
  userApi.updateUser(req.params.userId, req.body)
    .then((updatedUser) => {
      res.redirect(`/users/${req.params.userId}`)
    })
})

module.exports = {
  userRouter
}
