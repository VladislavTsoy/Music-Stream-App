const express = require('express')
const artistRouter = express.Router()
const Artist = require('../models/artist')

artistRouter.route('/artists')
    .get((req, res) => {
        Artist.find((err, allArtists) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allArtists)
        })
    })
    .post((req, res) => {
        const newArtist = new Artist(req.body)
        newArtist.save((err, newSavedArtist) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newSavedArtist)
        })
    })

artistRouter.route('/artists/:id')
    .get((req, res) => {
        Artist.findOne(
            {_id: req.params.id},
            (err, foundArtist) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(foundArtist)
            }
        )
    })
    .put((req, res) => {
        Artist.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, updatedArtist) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedArtist)
            }
        )
    })
    .delete((req, res) => {
        Artist.findOneAndRemove(
            {_id: req.params.id},
            (err, deleteArtist) => {
                if(err) return res.status(500).send(err)
                return res.status(202).send(deleteArtist)
            }
        )
    })

module.exports = artistRouter