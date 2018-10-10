import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo'
import { getAlbumQuery } from '../queries/queries'

// components
import AlbumItem from './AlbumItem'
import SongListFiltered from './SongListFiltered'


class AlbumDetail extends Component {
    constructor(props){
        super(props)
    }

    displayAlbum = () => {
        const { album } = this.props.data
        if(album) {
            return (
                <Fragment>
                    <AlbumItem songs={album} />
                    <SongListFiltered songs={album.tracks} />
                </Fragment>
            )
        } else {
            return <div>no albums elected</div>
        }
    }
    render() {
        return (
            <Fragment>
                <div id="album-detail-container">
                    {this.displayAlbum()}
                </div>
            </Fragment>
        );
    }
}

export default graphql(getAlbumQuery, {
    options: props => {
        return {
            variables: {
                id: props.match.params.id
            },
            fetchPolicy: 'no-cache'
        }
    }
})(AlbumDetail);