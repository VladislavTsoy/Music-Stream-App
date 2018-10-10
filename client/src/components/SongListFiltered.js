import React from 'react';
import { connect } from 'react-redux'
import { setCurrentSong } from '../redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fromPromise } from 'apollo-link';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
      width: 800,
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 80
    },
    table: {
      minWidth: 700,
      borderColor: 'black'
    },
    row: {
        backgroundColor: "inherit",
        '&:nth-of-type(odd)': {
            backgroundColor: 'rgb(20, 20, 20)'
        },
        cursor: "pointer"
    },
    type: {
        color: 'rgb(220, 220, 220)',
        fontWeight: 300,
        letterSpacing: 1
    },
    title: {
        color: 'rgb(220, 220, 220)',
        fontWeight: 500,
        letterSpacing: 1,
        fontSize: 16
    }
});
  
let id = 0;
function createData(title, album, genre, artwork, songObj) {
    id += 1;
    return { id, title, album, genre, artwork, songObj};
}
  
const SongListFiltered = props => {
    const { classes } = props;
    const rows = props.songs.map(song => {
        
        return createData(song.title, song.album? song.album.title : song.artist.name, song.genre, song.artwork, song)
    })

    const handleClick = song => {
        props.setCurrentSong(song)
    }

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>

          <TableHead>
            <TableRow>
              <CustomTableCell></CustomTableCell>
              <CustomTableCell className={classes.title}>Title</CustomTableCell>
              <CustomTableCell className={classes.title}>{props.songs[0].album? "Album" : "Artist"}</CustomTableCell>
              <CustomTableCell className={classes.title}>Genre</CustomTableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id} hover={true} onClick={() =>handleClick(row.songObj)}>
                  <CustomTableCell><img className="album-avatar" src={row.artwork}/></CustomTableCell>
                  <CustomTableCell className={classes.type}>{row.title}</CustomTableCell>
                  <CustomTableCell className={classes.type}>{row.album}</CustomTableCell>
                  <CustomTableCell className={classes.type}>{row.genre}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
};

SongListFiltered.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, {setCurrentSong})(withStyles(styles)(SongListFiltered))