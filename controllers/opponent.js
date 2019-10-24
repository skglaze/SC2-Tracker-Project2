const express = require('express')

const opponentApi = require('../models/opponent.js')
const gameApi = require('../models/game')

const opponentRouter = express.Router()

//get all
opponentRouter.get('/opponents', (req, res) => {
    opponentApi.getAllOpponents()
        .then((opponents) => {
            res.render('opponentViews/AllOpponents', { opponents })
        })
})

//get one
opponentRouter.get('/opponents/:opponentId', (req, res) => {
    opponentApi.getOneOpponent(req.params.opponentId)
        .then((opponent) => {
            gameApi.getAllGamesByOpponentId(req.params.opponentId)
                .then((opponentGames) => {
                    res.render('opponentViews/opponent', { opponent, opponentGames })
                })
        })
})

//create one
opponentRouter.get('/opponents/new/:userId', (req, res) => {
    res.render('opponentViews/newOpponentForm', { userId: req.params.userId })
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
    opponentApi.getOneOpponent(req.params.opponentId)
        .then((opponent) => {
            res.render('opponentViews/editOpponentForm', { opponent })
        })
})

opponentRouter.put('/opponents/:opponentId', (req, res) => {
    opponentApi.updateOpponent(req.params.opponentId, req.body)
        .then((updatedOpponent) => {
            res.redirect(`/opponents/${req.params.opponentId}`)
        })
})

module.exports = {
    opponentRouter
}
