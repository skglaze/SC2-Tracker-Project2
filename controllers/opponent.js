const express = require('express')

const opponentApi = require('../models/opponent.js')

const opponentRouter = express.Router()

//get all
opponentRouter.get('/opponents', (req, res) => {
    opponentApi.getAllOpponents()
        .then((opponents) => {
            res.render('opponentViews/opponents', { opponents })
        })
})

//get one
opponentRouter.get('/opponents/:opponentId', (req, res) => {
    opponentApi.getOneOpponent(req.params.opponentId)
        .then((opponent) => {
            res.render('opponentViews/opponent', { opponent })
        })
})

//create one
opponentRouter.get('/opponents/new', (req, res) => {
    res.render('opponentViews/newOpponentForm')
})

opponentRouter.post('/opponents', (req, res) => {
    opponentApi.addNewOpponent(req.body)
        .then((newOpponent) => {
            res.redirect(`/opponents/${newOpponent._id}`)
        })
})

//delete one
opponentRouter.delete('/opponents/:opponentId', (req, res) => {
    opponentApi.deleteOpponent(req.params.opponentId)
        .then((deletedOpponent) => {
            res.render('opponentViews/opponents')
        })
})

//update
opponentRouter.get('/opponents/edit/:opponentId', (req, res) => {
    opponentApi.deleteopponent(req.params.opponentId)
        .then((deletedopponent) => {
            res.render('opponentViews/editOpponentForm', { opponent })
        })
})

opponentRouter.put('/opponents/:opponentId', (req, res) => {
    opponentApi.updateOpponent(req.params.issueId, req.body)
        .then((updatedOpponent) => {
            res.redirect(`/opponents/${req.params.opponentId}`)
        })
})

module.exports = {
    opponentRouter
}
