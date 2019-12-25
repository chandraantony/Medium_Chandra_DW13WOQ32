import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {withStyles} from '@material-ui/core/styles';
import { Button, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = (theme => ({
    root: {
      flexGrow: 1,
      position: "sticky", 
      top: "0", 
      zIndex :1000
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  
  }));
  
class NavArticle extends Component{
    render(){
        const {classes} = this.props; 
        return(
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img alt="img" src="https://pbs.twimg.com/profile_images/823245858443407360/H2ou-nX1_400x400.jpg" height="40px"></img>
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap style={{ paddingRight:"20pt"}}>
                    <b>MISSION.ORG</b> 
                    </Typography>
                    <Button >MISSION ORIGINAL</Button>
                    <div style={{paddingLeft:"20pt", paddingRight:"20pt",fontSize :"20pt"}}>|</div>
                    <Button >SUBSCRIBE</Button>
                </Toolbar>
                </AppBar>
            
            </div>
        )
    }
}


export default withStyles(useStyles)(NavArticle);