const express = require('express')

const opponentApi = require('../models/opponent.js')

const opponentRouter = express.Router()

//get all
opponentRouter.get('/opponents', (req, res) => {
    opponentApi.getAllopponents()
        .then((opponents) => {
            res.render('opponentViews/opponents')
        })
})

//get one
opponentRouter.get('/opponents/:opponentId', (req, res) => {
    opponentApi.getOneopponent(req.params.opponentId)
        .then((opponent) => {
            res.render('opponentViews/opponent', { opponent })
        })
})

//create one
opponentRouter.get('/opponents/new', (req, res) => {
    res.render('opponentViews/newopponentForm')
})

opponentRouter.post('/opponents', (req, res) => {
    opponentApi.addNewopponent(req.body)
        .then((newopponent) => {
            res.redirect(`/opponents/${newopponent._id}`)
        })
})

//delete one
opponentRouter.delete('/opponents/:opponentId', (req, res) => {
    opponentApi.deleteopponent(req.params.opponentId)
        .then((deletedopponent) => {
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
