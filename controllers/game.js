const express = require('express')

const gameApi = require('../models/game.js')

const gameRouter = express.Router()

gameRouter.get('/users/new', (req, res) => {
    res.render('userViews/newUserForm')
})

//get all
gameRouter.get('/users', (req, res) => {
    userApi.getAllUsers()
        .then((users) => {
            res.render('userViews/allUsers', { users })
        })
})

//get one
gameRouter.get('/users/:userId', (req, res) => {
    userApi.getOneUser(req.params.userId)
        .then((user) => {
            opponentApi.getAllOpponentsByUserId(req.params.userId)
                .then((userOpponents) => {
                    res.render('opponentViews/opponent', (user, userOpponents))
                })
        })
})

//create one
gameRouter.post('/users', (req, res) => {
    userApi.addNewUser(req.body)
        .then((newUser) => {
            res.redirect(`/users/${newUser._id}`)
        })
})

//delete one
gameRouter.delete('/users/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId)
        .then((deletedUser) => {
            res.redirect('/users')
        })
})

module.exports = {
    gameRouter
}
