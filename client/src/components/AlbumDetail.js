// Required Modules
import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { getAlbumQuery } from '../queries/queries';

// Required Components
import AlbumItem from './AlbumItem';
import SongListFiltered from './SongListFiltered';
import CircularProgress from '@material-ui/core/CircularProgress';

const AlbumDetail = props => {
    const displayAlbum = () => {
        const { album } = props.data;
        if(album) {
            return (
                <Fragment>
                    <AlbumItem songs={album} />
                    <SongListFiltered songs={album.tracks} />
                </Fragment>
            );
        } else {
            return <CircularProgress size={100} />
        }
    };

    return (
        <Fragment>
            <div id="album-detail-container">
                {displayAlbum()}
            </div>
        </Fragment>
    );
};

export default graphql(getAlbumQuery, {
    options: props => {
        return {
            variables: {
                id: props.match.params.id
            },
            fetchPolicy: 'no-cache'
        };
    }
})(AlbumDetail);