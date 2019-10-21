const mongoose = require('./connection.js')

global.sampleModel = [];

const MapSchema = new mongoose.Schema({
    name: String,
    win: String,
    strategy: String,
})

const MapCollection = mongoose.model('Map', MapSchema)

const getAllMaps = () => {
    return MapCollection.find({})
}

const getOneMap = (id) => {
    return MapCollection.findById(id)
}

const addNewMap = (newMapData) => {
    return MapCollection.create(newMapData)
}

const updateMap = (id, mapData) => {
    return MapCollection.updateOne({ _id: id }, mapData)
}

const deleteMap = (id) => {
    return MapCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllMaps,
    getOneMap,
    addNewMap,
    updateMap,
    deleteMap,
}