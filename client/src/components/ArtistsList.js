import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo'
import { getArtistsQuery } from '../queries/queries'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom'
// components 
import ArtistItem from './ArtistItem'
import ArtistDetail from './ArtistDetail'

class ArtistsList extends Component {
    // componentDidMount = () => {
    //     console.log(this.props)
    // }

    // componentWillReceiveProps = nextProps => {
    //     console.log(nextProps)
    // }

    displayArtists = () => {
        let data = this.props.data
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            return data.artists.map(artist => {
                return  <Link key={artist.id} to={`/artists/${artist.id}`}>
                            <div id="song-item">
                                <ArtistItem artistObj={artist}/>
                            </div>
                        </Link>
            })
        }
    }
    render() {
        return (
            <Fragment>
                <h2>Artists</h2>
                <div id="song-list-container">
                    {this.displayArtists()}
                </div>
            </Fragment>
        );
    }
}

export default (graphql(getArtistsQuery)(connect(state=> state, {})(ArtistsList)))