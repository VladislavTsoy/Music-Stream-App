import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo'
import { getAlbumsQuery } from '../queries/queries'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom'

// components
import AlbumItem from './AlbumItem'

class AlbumsList extends Component {
    displayAlbums = () => {
        let data = this.props.data
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            return data.albums.map(album => {
                return <Link key={album.id} to={`/albums/${album.id}`}><div id="song-item">
                            <AlbumItem songs={album}/>
                        </div></Link>
            })
        }
    }
    render() {
        return (
            <Fragment>
                <h2>Albums</h2>
                <div id="song-list-container">
                    {this.displayAlbums()}
                </div>
            </Fragment>
        );
    }
}

export default graphql(getAlbumsQuery)(AlbumsList);