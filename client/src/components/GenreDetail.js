import React, { Component, Fragment} from 'react';
import { graphql } from 'react-apollo'
import { getGenreQuery } from '../queries/queries'

// components
import SongListFiltered from './SongListFiltered'

class GenreDetail extends Component {
    displayMusic = () => {
        let { data } = this.props
        if(data) {
            console.log(data.genre)
            if(data.loading) {
                return <div>...loading</div>
            } else {
                return (
                    <Fragment>  
                        <SongListFiltered songs={data.genre} />
                    </Fragment>
                )
            }
        }
    }

    render() {
        return (
            <Fragment>
                <h2 style={{marginLeft: 30}}>{this.props.match.params.id}</h2>
                <div id="album-detail-container">
                    {this.displayMusic()}
                </div>
            </Fragment>
        );
    }
}

export default graphql(getGenreQuery, {
    options: props => {
        return {
            variables: {
                genre: props.match.params.id
            },
            fetchPolicy: 'no-cache'
        }
    }
})(GenreDetail);