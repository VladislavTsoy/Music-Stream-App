import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      width: 250,
      minHeight: 250,
      textAlign: 'left',
      backgroundColor: 'inherit',
      boxShadow: 'none'
    },
    media: {
        width: 220,
        height: 220,
        backgroundPosition: 'center center',
        objectFit: 'cover',
        borderRadius: '50%',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 3px 1px -2px rgba(0,0,0,0.3), 0 1px 5px 0 rgba(0,0,0,0.3)'
    },
    title: {
        color: 'rgb(250, 250, 250)',
        fontWeight: 300,
        letterSpacing: 1,
        textAlign: 'center'
    },
    artist: {
        color: '#aaa',
        fontWeight: 300,
        letterSpacing: 1
    }
};

const ArtistItem = props => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                height="140"
                image={props.artistObj.artistImg}
                title={props.artistObj.name}
            />
            <CardContent>
                <Typography className={classes.title} component="p" variant="title">
                {props.artistObj.name? props.artistObj.name : ''}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

ArtistItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistItem);