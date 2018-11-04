// Required Modules
import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { getArtistsQuery } from '../queries/queries';
import { connect } from 'react-redux';

// Required Components 
import ArtistItem from './ArtistItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const ArtistsList = props => {
    const displayArtists = () => {
        let data = props.data;
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            return data.artists.map(artist => {
                return  <Link key={artist.id} to={`/artists/${artist.id}`}>
                            <div id="song-item">
                                <ArtistItem artistObj={artist}/>
                            </div>
                        </Link>
            });
        }
    };

    return (
        <Fragment>
            <h2>Artists</h2>
            <div id="song-list-container">
                {displayArtists()}
            </div>
        </Fragment>
    );
};

export default (graphql(getArtistsQuery)(connect(state=> state, {})(ArtistsList)));