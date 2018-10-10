const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    name: String,
    artistImg: String,
})

module.exports = mongoose.model("Artist", artistSchema)