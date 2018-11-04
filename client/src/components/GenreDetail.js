// Required Modules
import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { getGenreQuery } from '../queries/queries';

// Required Components
import SongListFiltered from './SongListFiltered';

const GenreDetail = props => {
    const displayMusic = () => {
        let { data } = props;
        if(data) {
            if(data.loading) {
                return <div>...loading</div>;
            } else {
                return (
                    <Fragment>  
                        <SongListFiltered songs={data.genre} />
                    </Fragment>
                );
            }
        };
    };

    return (
        <Fragment>
            <h2 style={{marginLeft: 30}}>{props.match.params.id}</h2>
            <div id="album-detail-container">
                {displayMusic()}
            </div>
        </Fragment>
    );  
};

export default graphql(getGenreQuery, {
    options: props => {
        return {
            variables: {
                genre: props.match.params.id
            },
            fetchPolicy: 'no-cache'
        };
    }
})(GenreDetail);