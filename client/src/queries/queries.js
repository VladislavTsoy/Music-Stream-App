import { gql } from 'apollo-boost'

const getSongsQuery = gql`
    {
        songs{
            id
            title
            artist{
                id
                name
            }
            genre
            artwork
            album{
                id
                title
            }
            source
            duration
        }
    }
`


const getArtistsQuery = gql`
    {
        artists{
            id
            name
            artistImg
            albums{
                id
                title
                artwork
                tracks{
                    id
                    title
                    source
                    duration
                }
            }
            songs{
                id
                title
                artwork
                source
                duration
            }
        }
    }
`

const getArtistQuery = gql`
    query($id: ID){
        artist(id: $id){
        name
        artistImg
        albums{
        id
        title
        artwork
        tracks{
            id
            title
            artwork
            genre
            source
            duration
        }
        }
        songs {
        id
        title
        artwork
        genre
        source
        duration
        artist{
            name
        }
        album{
            title
            }
        }
    }
}
`



const getAlbumsQuery = gql`
    {
        albums{
            id
            title
            artist{
                id
                name
            }
            artwork
        }
    }
`

const getAlbumQuery = gql`
query($id: ID){
    album(id: $id){
        title
        artwork
        tracks{
            id
            title
            artwork
            genre
            source
            duration
            artist{
                name
            }
        }
        artist{
            name
            artistImg
        }
    }
}
`

const getGenreQuery = gql`
query($genre: String){
    genre(genre: $genre){
        id
        title
        artwork
        source
        duration
        artist{
            name
            artistImg
        }
        album{
            title
            artwork
        }
    }
}
`

export { getSongsQuery, getArtistsQuery, getAlbumsQuery, getArtistQuery, getAlbumQuery, getGenreQuery }


