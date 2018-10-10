import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


// components
import SongListFiltered from './SongListFiltered'
import ArtistDetailAlbums from './ArtistDetailAlbums'

const styles = {
    artist: {
        marginLeft: 20
    },
    heading: {
        fontWeight: 800,
        color: 'rgb(250, 250, 250)',
        letterSpacing: 1,
    },
    albums: {
        color: 'rgb(150, 150, 150)',
        marginTop: 20,
    },
    songs: {
        color: 'rgb(150, 150, 150)',
        marginTop: 30
    }
};



class ArtistDetailItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayAlbums: []
        }
    }
    componentDidMount = () => {
        // console.log(this.props)
        if(this.props.artistObj){
            const temp = this.props.artistObj.albums.map(album => {
                return <Link key={album.id} to={`/albums/${album.id}`}><ArtistDetailAlbums albumObj={album}/></Link>
            })
            this.setState({displayAlbums: [...temp]})
        }
    }

    render(){
        const { classes } = this.props;
        // console.log(this.state)
        return (
            <div className={classes.artist}>
                <div id="artist-detail-item-heading">
                    <Typography className={classes.heading} component='p' variant="display4">{this.props.artistObj? this.props.artistObj.name : ''}</Typography>
                </div>
                <Typography className={classes.albums} variant="subheading">Albums</Typography>
                <div className="artist-detail-albums">
                    {this.state.displayAlbums}
                </div>
                <Typography className={classes.songs} variant="subheading">Songs</Typography>
                <div>
                    {this.props.artistObj?
                    <SongListFiltered songs={this.props.artistObj.songs}/>
                    :''
                    }
                </div>
            </div>
        );
    }
};

ArtistDetailItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistDetailItem)