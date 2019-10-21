const express = require('express')

const mapApi = require('../models/map.js')

const mapRouter = express.Router()

//get all
mapRouter.get('/maps', (req, res) => {
    mapApi.getAllmaps()
        .then((maps) => {
            res.render('mapViews/maps')
        })
})

//get one
mapRouter.get('/maps/:mapId', (req, res) => {
    mapApi.getOnemap(req.params.mapId)
        .then((map) => {
            res.render('mapViews/map', { map })
        })
})

//create one
mapRouter.get('/maps/new', (req, res) => {
    res.render('mapViews/newmapForm')
})

mapRouter.post('/maps', (req, res) => {
    mapApi.addNewmap(req.body)
        .then((newmap) => {
            res.redirect(`/maps/${newmap._id}`)
        })
})

//delete one
mapRouter.delete('/maps/:mapId', (req, res) => {
    mapApi.deletemap(req.params.mapId)
        .then((deletedmap) => {
            res.render('mapViews/maps')
        })
})

//update
mapRouter.get('/maps/edit/:mapId', (req, res) => {
    mapApi.deletemap(req.params.mapId)
        .then((deletedmap) => {
            res.render('mapViews/editmapForm', { map })
        })
})

mapRouter.put('/maps/:mapId', (req, res) => {
    mapApi.updatemap(req.params.issueId, req.body)
        .then((updatedmap) => {
            res.redirect(`/maps/${req.params.mapId}`)
        })
})

module.exports = {
    mapRouter
}
