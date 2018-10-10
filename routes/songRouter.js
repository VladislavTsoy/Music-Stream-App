const express = require('express')
const songRouter = express.Router()
const Song = require('../models/song')

songRouter.route('/songs')
    .get((req, res) => {
        Song.find((err, allSongs) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allSongs)
        })
    })
    .post((req, res) => {
        const newSong = new Song(req.body)
        newSong.save((err, newSavedSong) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newSavedSong)
        })
    })

songRouter.route('/songs/:id')
    .get((req, res) => {
        Song.findOne(
            {_id: req.params.id},
            (err, foundSong) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(foundSong)
            }
        )
    })
    .put((req, res) => {
        Song.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, updatedSong) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedSong)
            }
        )
    })
    .delete((req, res) => {
        Song.findOneAndRemove(
            {_id: req.params.id},
            (err, deletedSong) => {
                if(err) return res.status(500).send(err)
                return res.status(202).send(deletedSong)
            }
        )
    })

module.exports = songRouter