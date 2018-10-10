const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: String,
    artistId: String,
    artwork: String
})

module.exports = mongoose.model("Album", albumSchema)