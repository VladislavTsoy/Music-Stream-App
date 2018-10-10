import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getArtistQuery } from '../queries/queries'

// compopnents
import ArtistDetailItem from './ArtistDetailItem'

class ArtistDetail extends Component {
    constructor() {
        super()

        this.state = {
            loading: true
        }
    }

    // componentWillReceiveProps = nextProps => {
    //     console.log(nextProps)
    // }

    displayArtist = () => {
        let data = this.props.data
        // console.log(data)
        // console.log(data.artist)
        if(data.loading){
            return <div>loading.</div>
        } else if(data.artist){
            // console.log(data.artist)
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

