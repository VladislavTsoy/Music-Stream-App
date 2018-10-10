import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      width: 150,
      minHeight: 150,
      textAlign: 'left',
      marginRight: 30,
      backgroundColor: 'inherit',
      boxShadow: 'none',
    },
    media: {
        width: 150,
        height: 150,
        backgroundPosition: 'center center',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 1px 3px -2px rgba(0,0,0,0.3), 0 1px 5px 0 rgba(0,0,0,0.3)'
    },
    title: {
        color: 'rgb(250, 250, 250)',
        fontWeight: 300,
        letterSpacing: 1
    },
    artist: {
        color: '#aaa',
        fontWeight: 300,
        letterSpacing: 1
    }
};

const ArtistDetailAlbums = props => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardMedia
            component="img"
            className={classes.media}
            height="140"
            image={props.albumObj.artwork}
            title={props.albumObj.title}
          />
        </Card>
    );
};

ArtistDetailAlbums.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistDetailAlbums)