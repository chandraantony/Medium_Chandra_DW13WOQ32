import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = (theme => ({
    root: {
      flexGrow: 1,
    }, 
  
    avatar:{
      height : 50,
      width : 50,
      align : "center",
    },
    
    btn:{ 
      maxWidth: '30px', 
      maxHeight: '30px', 
      minWidth: '30px', 
      minHeight: '30px',
    },
  
    btnsize:{
      maxHeight: '20px', 
      minHeight: '20px',
      color:"#bf28a6",
      borderColor:"#bf28a6",
      fontSize : "8pt",
    },
  
    leftalign : {
      textAlign:"left",
      padding:0,
      margin:0,
      position:"absolute",
    },
  
    centeralign :{
      textAlign: "right",
    },
  
    avatar1:{
      height : 80,
      width : 80,
      align : "center",
    },
  
    buttonstyle :{
      borderColor : "#ff6666",
      color : "#ff6666",
    }
  
    }));

class FollowMe extends Component {
    constructor(){
        super();
        this.state = {
            follow : true,
        }
        
    }

    unfollow = () =>{
        this.setState(
            {
                follow : !this.state.follow
            }
        )
    };

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}> 
            <Container maxWidth="sm" style={{paddingTop:"20pt", paddingBottom:"50pt"}}>
                
              <Paper className={classes.paper} elevation={0} >
              <Typography>
                  <Button variant="outlined" style={{backgroundColor :"#f2f2f2", marginRight :"10pt"}}>Jamu</Button>
                  <Button variant="outlined" style={{backgroundColor :"#f2f2f2", marginRight :"10pt"}}>Jamu</Button>
                  <Button variant="outlined" style={{backgroundColor :"#f2f2f2", marginRight :"10pt"}}>Jamu</Button>
              </Typography>
              <br></br>
              <Grid container>
                <Grid item sm={2} align="center">
                  <Avatar className={classes.avatar}>Like</Avatar>
                </Grid>
                <Grid item  sm={6} >   
                <Typography style={{marginTop :"10pt"}}>69k Clap</Typography>
                </Grid>
                <Grid item xs={12} sm={4} align="right" style={{paddingTop:"10pt"}} >
                  <Button className={classes.btn}><TwitterIcon/></Button>
                  <Button className={classes.btn}><LinkedInIcon/></Button>
                  <Button className={classes.btn}><FacebookIcon/></Button>
                  <Button className={classes.btn}><BookmarkIcon/></Button>
                  <Button className={classes.btn}><MoreHorizIcon/></Button>
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <br/>
              <Grid container>
                <Grid item sm={3} align="center">
                  <Avatar className={classes.avatar1}><img alt ="img1" src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif"></img></Avatar>
                </Grid>
                <Grid item  sm={6} >  
                <Typography  color="textSecondary" style={{fontSize : "10pt"}}>Written By:</Typography> 
                <Typography  style={{marginTop :"14pt"}}><b>Name....... </b></Typography>
                <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                </Grid>
                <Grid item  sm={3} align="right">   
                <Button className={classes.buttonstyle} variant="outlined" onClick={this.unfollow}  >{this.state.follow ? 'FOLLOW' : 'UNFOLLOW' }</Button>
                </Grid>
              </Grid>
              <br/>
              <Grid container>
                <Grid item sm={3} align="center">
                  <Avatar className={classes.avatar1}><img alt="img2" src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif"></img></Avatar>
                </Grid>
                <Grid item  sm={6} >  
                <Typography  style={{marginTop :"14pt"}}><b>Name....... </b></Typography>
                <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                </Grid>
                <Grid item  sm={3} align="right" >   
                <Button className={classes.buttonstyle} variant="outlined" onClick={this.unfollow}  >{this.state.follow ? 'FOLLOW' : 'UNFOLLOW' }</Button>
                </Grid>
              </Grid>
              <br/>
              <center>
              <div style ={{flex: '1' , flexDirection : 'column', display : 'flex'}}>
              <Button variant="outlined"  color="secondary" href="/comment">SEE MORE</Button>
              </div>
              </center>
              </Paper>
            </Container>
        </div>
        )
        
    }
}

export default withStyles(useStyles)(FollowMe);