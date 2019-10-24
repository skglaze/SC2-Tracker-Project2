const express = require('express')

const gameApi = require('../models/game.js')

const gameRouter = express.Router()

gameRouter.get('/game/new/:opponentId', (req, res) => {
    res.render('gameViews/newGameForm', { opponentId: req.params.opponentId })
})

//get all
gameRouter.get('/games', (req, res) => {
    gameApi.getAllGames()
        .then((games) => {
            res.render('gameViews/allGames', { games })
        })
})

//get one
gameRouter.get('/games/:gameId', (req, res) => {
    gameApi.getOneGame(req.params.gameId)
        .then((game) => {
            res.render('gameViews/game', { game })
        })
})

//create one
gameRouter.post('/games', (req, res) => {
    gameApi.addNewGame(req.body)
        .then((newGame) => {
            res.redirect(`/opponents/${newGame.opponentId._id}`)
        })
})

//delete one
gameRouter.delete('/games/:gameId', (req, res) => {
    gameApi.deleteGame(req.params.gameId)
        .then((deletedGame) => {
            res.redirect('/games')
        })
})

module.exports = {
    gameRouter
}
