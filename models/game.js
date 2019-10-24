const mongoose = require('./connection.js')

global.sampleModel = [];

const GameSchema = new mongoose.Schema({
    map: String,
    opponentStrat: String,
    userStrat: String,
    win: String,
    opponentId: mongoose.ObjectId,
})

const GameCollection = mongoose.model('Game', GameSchema)

const getAllGames = () => {
    return GameCollection.find({})
}

const getAllGamesByOpponentId = (opponentId) => {
    return GameCollection.find({ opponentId: opponentId })
}

const getOneGame = (id) => {
    return GameCollection.findById(id)
}

const addNewGame = (newGameData) => {
    return GameCollection.create(newGameData)
}

const updateGame = (id, gameData) => {
    return GameCollection.updateOne({ _id: id }, gameData)
}

const deleteGame = (id) => {
    return GameCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllGames,
    getAllGamesByOpponentId,
    getOneGame,
    addNewGame,
    updateGame,
    deleteGame,
}