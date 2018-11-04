// Required Modules
import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { getAlbumsQuery } from '../queries/queries';

// Required Components
import AlbumItem from './AlbumItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const AlbumsList = props => {
    const displayAlbums = () => {
        let data = props.data
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            return data.albums.map(album => {
                return <Link key={album.id} to={`/albums/${album.id}`}><div id="song-item">
                            <AlbumItem songs={album}/>
                        </div></Link>
            });
        }
    };
    return (
        <Fragment>
            <h2>Albums</h2>
            <div id="song-list-container">
                {displayAlbums()}
            </div>
        </Fragment>
    );
};

export default graphql(getAlbumsQuery)(AlbumsList);