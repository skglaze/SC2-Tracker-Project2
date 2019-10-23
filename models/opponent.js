const mongoose = require('./connection.js')

global.sampleModel = [];

const OpponentSchema = new mongoose.Schema({
    name: String,
    mmr: Number,
    race: String,
    userId: mongoose.ObjectId,
})

const OpponentCollection = mongoose.model('Opponent', OpponentSchema)

const getAllOpponentsByUserId = () => {
    return OpponentCollection.find({ userId: userId })
}

const getOneOpponent = (id) => {
    return OpponentCollection.findById(id)
}

const addNewOpponent = (newOpponentData) => {
    return OpponentCollection.create(newOpponentData)
}

const updateOpponent = (id, opponentData) => {
    return OpponentCollection.updateOne({ _id: id }, opponentData)
}

const deleteOpponent = (id) => {
    return OpponentCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllOpponentsByUserId,
    getOneOpponent,
    addNewOpponent,
    updateOpponent,
    deleteOpponent,
}