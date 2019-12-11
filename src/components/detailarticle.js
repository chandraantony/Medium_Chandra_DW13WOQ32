import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FacebookIcon from '@material-ui/icons/Facebook';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop : 20
  }, 
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  paper:{
    height : 100,
    justifyContent : "center",
    display: "flex",
    flexDirection : "column",
    paddingTop : 10
  },

  avatar:{
    height : 50,
    width : 50,
    align : "center"
  },
  
  btn:{ 
    maxWidth: '30px', 
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px'
  },

  btnsize:{
    maxHeight: '20px', 
    minHeight: '20px',
    color:"#bf28a6",
    borderColor:"#bf28a6",
    fontSize : "8pt"
  }

  }));

export default function AutoGrid() {
  const classes = useStyles();

  return (
  <div className={classes.root}> 
    <Container maxWidth="md" >
        <ButtonBase >
           <img className={classes.img} alt="complex" src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif" />
        </ButtonBase>
    <div align="center">
    <br></br>
    <Link href="#" color="inherit">Entertaiment</Link>
    </div>
      <Container maxWidth="sm" style={{paddingTop:"30pt", paddingBottom:"30pt"}} >
        <Typography align="justify" variant="h4">
        Researchers Say No to Low Carb and Keto Diets
        </Typography>
        <Paper className={classes.paper} elevation ={0} >
        <Grid container >
          <Grid item sm={2} align="center">
            <Avatar className={classes.avatar}> <img className={classes.img} alt="complex" src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif" /></Avatar>
          </Grid>
          <Grid item  sm={7} >
            <Typography style={{fontSize :"10pt"}} >Chandra Antonius P <Button variant="outlined" className={classes.btnsize} >FOLLOW</Button></Typography>
            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Dec 11, 2019 . 10 min read</Typography>
          </Grid>
          <Grid item xs={12} sm={3} align="right" style={{paddingTop:"10pt"}} >
            <Button className={classes.btn}><TwitterIcon/></Button>
            <Button className={classes.btn}><LinkedInIcon/></Button>
            <Button className={classes.btn}><FacebookIcon/></Button>
            <Button className={classes.btn}><BookmarkIcon/></Button>
          </Grid>
        </Grid>
      </Paper>
      <Typography>
        <p>
        Bla... Bla...Blaa.
        </p>
      </Typography>
      </Container>
   </Container>
  </div>

  );
}