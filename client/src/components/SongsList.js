import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo'
import { getSongsQuery } from '../queries/queries'
import { connect } from 'react-redux'
import { setCurrentSong } from '../redux'
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import SongItem from './SongItem'

class SongsList extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            selected: null
        }
    }
    handleClick = current => {
        this.props.setCurrentSong(current)
    }

    displaySongs = () => {
        let data = this.props.data
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            console.log
            return data.songs.map(song => {
                return <div key={song.id} onClick={ () => this.handleClick(song) } id="song-item"><SongItem songObj={song}/></div>
            })
        }
    }

    render() {
        return (
            <Fragment>
                <h2>Song Library</h2>
                <div id="song-list-container">
                    {this.displaySongs()}
                </div>
            </Fragment>
        );
    }
}

export default (graphql(getSongsQuery)  (  connect(state => state, { setCurrentSong } )(SongsList)));