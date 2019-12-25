import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'
import  Button  from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const MyStyle = (theme => ({
    root: {
      flexGrow: 1,
    },
    avatar:{
        width : 100,
        height : 100,
        display:"block",
        margin:"auto"
    }
}));

class ProfileBody extends Component {
    constructor(){
        super();
        this.state ={
            following : true,
         
        }
      
    }
    
    follow = () =>{
        this.setState(
            {
                following : !this.state.following
            }
        )
        
    }

  

    componentDidMount(){
        
    }


    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
            <Container  maxWidth="sm" style={{paddingTop :"20px"}} >
            <Grid container>
                <Grid item xs={12}  sm={10} >  
                <Typography  variant="h5" ><b>Chandra Antonius P</b> 
                <Button style={{marginLeft : '20pt'}} className={classes.buttonstyle} variant="outlined" onClick={this.follow}  >{this.state.following ? 'FOLLOW' : 'UNFOLLOW' }</Button>
                </Typography> 
            
                <Typography  color="textSecondary"  style={{marginTop :"14pt"}}><b>Write smth here..</b></Typography>
                <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                </Grid>
                <Grid item xs={12}  sm={2} >   
                <Avatar alt="testimg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcbk08tKITjmAjYWODwsB41p_GpEv4CKl7-s56sOGAwGk-fqCA" className={classes.avatar} />
                </Grid>
                </Grid>
                <Paper elevation={0} style={{paddingTop:"20pt"}}>
                    <b>Something Here</b>
                </Paper>
            </Container>
        </div>
        )
    }

}
export default withStyles(MyStyle)(ProfileBody);