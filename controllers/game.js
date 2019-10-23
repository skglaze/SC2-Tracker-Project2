const express = require('express')

const opponentApi = require('../models/opponent.js')
const mapApi = require('../models/map.js')


const gameRouter = express.Router()

//create one
gameRouter.get('/game/new', (req, res) => {
    res.render('gameViews/newGameForm')
})

gameRouter.post('/sc2OpponentTracker', (req, res) => {
    opponentApi.addNewOpponent(req.body)
        .then((newOpponent) => {
            res.redirect(`/opponents/${newOpponent._id}`)
        })
})

module.exports = {
    gameRouter
}
