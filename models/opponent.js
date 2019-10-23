const mongoose = require('./connection.js')

global.sampleModel = [];

const OpponentSchema = new mongoose.Schema({
    name: String,
    mmr: Number,
    race: String,
    userId: mongoose.ObjectId,
})

const OpponentCollection = mongoose.model('Opponent', OpponentSchema)

const getAllOpponents = () => {
    return OpponentCollection.find({})
}

const getAllOpponentsByUserId = (userId) => {
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
    getAllOpponents,
    getAllOpponentsByUserId,
    getOneOpponent,
    addNewOpponent,
    updateOpponent,
    deleteOpponent,
}