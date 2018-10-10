const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: String,
    artistId: String,
    genre: String,
    artwork: String,
    albumId: String,
    source: String,
    duration: Number
})

module.exports = mongoose.model("Song", songSchema)