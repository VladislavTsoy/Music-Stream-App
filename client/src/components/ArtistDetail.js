import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getArtistQuery } from '../queries/queries'
import CircularProgress from '@material-ui/core/CircularProgress';

// compopnents
import ArtistDetailItem from './ArtistDetailItem'

class ArtistDetail extends Component {
    constructor() {
        super()

        this.state = {
            loading: true
        }
    }

    displayArtist = () => {
        let data = this.props.data
        if(data.loading){
            return <CircularProgress size={100} />
        } else if(data.artist){
            return <ArtistDetailItem artistObj={data.artist}/>
        }
    }
    
    render() {
        return (
            <div>
                {this.displayArtist()}
            </div>
        );
    }
}

export default graphql(getArtistQuery, {
    options: props => {
        return {
            variables: {
                id: props.match.params.id
            },
            fetchPolicy: 'no-cache'
        }
    }
})(ArtistDetail)

