import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'inherit',
    }
});

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            menuToggle: false
        }
    }

    handleMenu = () => {
        console.log(this.state.menuToggle)
        this.setState(prevState => {
            return  { menuToggle: !prevState.menuToggle }
        })
    }

    render(){
        const { classes } = this.props;

        return (
        <div className={classes.root}>

            <Button className="hamburger-menu" onClick={this.handleMenu}>
                <Menu />
            </Button>

            <List component="nav" id="category-items" style={this.state.menuToggle? {
                                                                                    display: "inline-block", 
                                                                                    position: "absolute",
                                                                                    width: '100vw',
                                                                                    left: 0,
                                                                                    top: "10vh",
                                                                                    backgroundColor: "rgb(40,40,40)",
                                                                                    zIndex: 2,
                                                                                    background: 'linear-gradient(to left, rgb(24,24,24), rgb(63,63,63))',
                                                                                    opacity: 1,
                                                                                    transition: 'opacity .5s, height 1s',
                                                                                } : {display: "block",
                                                                                    position: "absolute",
                                                                                
                                                                                    left: 0,
                                                                                    top: "10vh",}}>
                <Link to='/'>
                    <ListItem button>
                        <ListItemText primary="Songs" />
                    </ListItem>
                </Link>
                <Divider light={true}/>

                <Link to='/artists'>
                    <ListItem button>
                        <ListItemText primary="Artists" />
                    </ListItem>
                </Link>
                <Divider light={true}/>

                <Link to='/albums'>
                    <ListItem button>
                        <ListItemText primary="Albums" />
                    </ListItem>
                </Link>

                <Divider light={true}/>

                <Link to='/genres'>
                    <ListItem button>
                        <ListItemText primary="Genre" />
                    </ListItem>
                </Link>

                <Divider light={true}/>
                
                <Link to='/radio'>
                    <ListItem button>
                        <ListItemText primary="Radio" />
                    </ListItem>
                </Link>
            </List>
        </div>
    );
    }
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Navbar);