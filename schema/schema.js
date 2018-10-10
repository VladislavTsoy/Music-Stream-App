const graphql = require('graphql')
const Song = require('../models/song')
const Artist = require('../models/artist')
const Album = require('../models/album')

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt,
    GraphQLSchema, 
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull
} = graphql

// GraphQL Song Object
const SongType = new GraphQLObjectType({
    name: "Song",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        artwork: { type: GraphQLString },
        source: {type: GraphQLString },
        duration: {type: GraphQLInt},
        artist: {
            type: ArtistType,
            resolve(parent, args) {
                return Artist.findById(parent.artistId)
            }
        },
        album: {
            type: AlbumType, 
            resolve(parent, args) {
                return Album.findById(parent.albumId)
            }
        }
    })
})

//GraphQL Artist Object
const ArtistType = new GraphQLObjectType({
    name: "Artist",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        artistImg: { type: GraphQLString },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parent, args) {
                return Song.find({artistId: parent.id})
            }
        },
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parent, args) {
                return Album.find({artistId: parent.id})
            }
        }
    })
})

const AlbumType = new GraphQLObjectType({
    name: "Album",
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        artwork: {type: GraphQLString},
        artist: {
            type: ArtistType,
            resolve(parent, args){
                return Artist.findById(parent.artistId)
            }
        },
        tracks: {
            type: new GraphQLList(SongType),
            resolve(parent, args) {
                return Song.find({albumId: parent.id})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        song: {
            type: SongType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Song.findById(args.id)
            }
        },
        album: {
            type: AlbumType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Album.findById(args.id)
            }
        },
        artist: {
            type: ArtistType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Artist.findById(args.id)
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parent, args) {
                return Song.find()
            }
        },
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parent, args) {
                return Album.find()
            }
        },
        artists: {
            type: new GraphQLList(ArtistType),
            resolve(parent, args){
                return Artist.find()
            }
        },
        genre: {
            type: new GraphQLList(SongType),
            args: {genre: {type: GraphQLString}},
            resolve(parent, args){
                return Song.where({genre: args.genre})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addArtist: {
            type: ArtistType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                artistImg: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let artist = new Artist({
                    name: args.name,
                    artistImg: args.artistImg
                })
                return artist.save()
            }
        },
        addAlbum: {
            type: AlbumType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                artistId: {type: new GraphQLNonNull(GraphQLString)},
                artwork: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let album = new Album({
                    title: args.title,
                    artistId: args.artistId,
                    artwork: args.artwork
                })
                return album.save()
            }
        },
        addSong: {
            type: SongType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                artistId: {type: new GraphQLNonNull(GraphQLID)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                artwork: {type: new GraphQLNonNull(GraphQLString)},
                albumId: {type: new GraphQLNonNull(GraphQLString)},
                source: {type: new GraphQLNonNull(GraphQLString)},
                duration: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args) {
                let song = new Song({
                    title: args.title,
                    artistId: args.artistId,
                    genre: args.genre,
                    artwork: args.artwork,
                    albumId: args.albumId,
                    source: args.source,
                    duration: args.duration
                })
                return song.save()
            }
        },
        updateArtist: {
            type: ArtistType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                artistImg: {type: new GraphQLNonNull(GraphQLString)}
            }, 
            resolve(parent, args) {
                return Artist.findByIdAndUpdate(
                    args.id,
                    { 
                        $set: { 
                            name: args.name, 
                            artistImg: args.artistImg
                        }
                    },
                    { new: true } 
                )
            }
        },
        updateAlbum: {
            type: AlbumType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                title: {type: new GraphQLNonNull(GraphQLString)},
                artistId: {type: new GraphQLNonNull(GraphQLString)},
                artwork: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                return Album.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            artistId: args.artistId,
                            artwork: args.artwork
                        }
                    },
                    { new: true }
                )
            }
        },
        updateSong: {
            type: SongType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                title: {type: new GraphQLNonNull(GraphQLString)},
                artistId: {type: new GraphQLNonNull(GraphQLID)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                artwork: {type: new GraphQLNonNull(GraphQLString)},
                albumId: {type: new GraphQLNonNull(GraphQLString)},
                source: {type: new GraphQLNonNull(GraphQLString)},
                duration: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args) {
                return Song.findByIdAndUpdate(
                args.id,
                    {
                        $set: {
                            title: args.title,
                            artistId: args.artistId,
                            genre: args.genre,
                            artwork: args.artwork,
                            albumId: args.albumId,
                            source: args.source,
                            duration: args.duration
                        }
                    },
                    { new: true }
                )
            }
        },
        deleteArtist: {
            type: ArtistType,
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return Artist.findByIdAndDelete(args.id)
            }
        },
        deleteAlbum: {
            type: AlbumType,
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return Album.findByIdAndRemove(args.id)
            }
        },
        deleteSong: {
            type: SongType,
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return Song.findByIdAndRemove(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})