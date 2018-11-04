// Required Modules
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

// Required Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

class MusicControls extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            togglePlay: props.audioFile? true : false
        };
    };

    styles = {
        card: {
          display: 'flex',
          backgroundColor: 'inherit',
          boxShadow: 'none'
        },
        details: {
          display: 'flex',
          flexDirection: 'row',
        },
        content: {
          flex: '1 0 auto',
          color: 'white',
          justifyContent: 'flex-start'
        },
        cover: {
          width: '15vh',
          height: '15vh',
        },
        controls: {
          display: 'flex',
          alignItems: 'center'
        },
        playIcon: {
          height: 38,
          width: 38,
          color: 'white'
        },
        type: {
            color: 'white'
        }
    };

    componentDidUpdate = (prevProps) => {
        if(!prevProps.audioFile){
            this.setState({togglePlay: true})
        }
    };

    playSong = () => {
        console.log('play')
        if(this.props.audioFile){
            this.props.audioFile.play()
            this.setState({togglePlay: true})
        }
    };

    pauseSong = () => {
        console.log('pause')
        this.props.audioFile.pause()
        this.setState({togglePlay: false})
    };
    
    render(){
        return (
            <div>
                <Card style={this.styles.card}>
                    <div style={this.styles.details} id="music-controller">
                        <div className="music-box">
                            <CardContent style={this.styles.content}>
                                <Typography style={this.styles.type} variant="subheading">{this.props.currentSong
                                                                                                ? this.props.currentSong.title 
                                                                                                : ''
                                                                                            }</Typography>
                                <Typography style={this.styles.type} variant="body2" color="textSecondary">
                                {this.props.currentSong? this.props.currentSong.artist.name : ''}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className="music-box">
                            <div style={this.styles.controls}>
                                <IconButton style={this.styles.type} aria-label="Previous">
                                    <SkipPreviousIcon />
                                </IconButton>
                                <IconButton aria-label="Play/pause" onClick={this.state.togglePlay? this.pauseSong : this.playSong}>
                                    {this.state.togglePlay
                                        ? <PauseIcon style={this.styles.playIcon} onClick={() => this.pauseSong()} /> 
                                        : <PlayArrowIcon style={this.styles.playIcon} onClick={() =>this.playSong()}/>}
                                </IconButton>
                                <IconButton style={this.styles.type} aria-label="Next">
                                    <SkipNextIcon />
                                </IconButton>
                        </div>
                        </div>
                        <div className="music-box">
                            <CardMedia
                                style={this.styles.cover}
                                image={this.props.currentSong? this.props.currentSong.artwork : ''}
                                title="Live from space album cover"
                                />
                        </div>
                    </div>
            </Card>
        </div>
        );
    }
};

export default connect(state => state, {}) (MusicControls);