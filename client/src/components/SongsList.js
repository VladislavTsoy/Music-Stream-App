// Required Modules
import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'react-apollo'
import { getSongsQuery } from '../queries/queries'
import { connect } from 'react-redux'
import { setCurrentSong } from '../redux'

// Required Components
import CircularProgress from '@material-ui/core/CircularProgress';
import SongItem from './SongItem'

let songLibrary;
class SongsList extends PureComponent {
    constructor(props) {
        super(props) ;
        this.state = {
            selected: null,
            isLoaded: false
        };
    };

    handleClick = current => {
        this.props.setCurrentSong(current)
    };

    displaySongs = () => {
        let data = this.props.data
        if(data.loading) {
            return <CircularProgress size={100} />
        } else {
            if(data.songs){
                if(this.state.isLoaded === false)
                this.setState(prevState => { return {selected: prevState.selected, isLoaded: true}})
                console.log(data.songs)
                songLibrary = data.songs.map(song => {
                    return <div key={song.id} onClick={ () => this.handleClick(song) } id="song-item"><SongItem songObj={song}/></div>
                });
            };
        }
    };

    render() {
        this.displaySongs();
        return (
            <Fragment>
                <h2>Song Library</h2>
                <div id="song-list-container">
                    {this.state.isLoaded && songLibrary}
                </div>
            </Fragment>
        );
    };
};

export default (graphql(getSongsQuery)(connect(state => state, { setCurrentSong } )(SongsList)));