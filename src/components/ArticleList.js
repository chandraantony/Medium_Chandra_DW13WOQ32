import React ,{Component}  from 'react';
import {withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';







const Mystyle = (theme => ({
    root: {
      flexGrow: 1,
    },
    img :{
        width : 50,
        height : 50,
    },
    padding :{
        padding : theme.spacing(2)
    },
    btnsize:{
      maxHeight: '20px', 
      minHeight: '20px',
      maxWidth: '20px', 
      minWidth: '20px',
      color:"#bf28a6",
      borderColor:"#bf28a6",
      fontSize : "8pt"
    },
    btn:{ 
      maxWidth: '30px', 
      maxHeight: '30px', 
      minWidth: '30px', 
      minHeight: '30px'
    },
    media: {
      height: 200,
    },
  
  
  }));


class ArticleList extends Component {

    
    
    constructor(){
        super();
        this.state = {
            switchbook : true,
            switchlike : true
        }
  
    }

    bookmarkme = () =>{
        this.setState(
            {
                switchbook : !this.state.switchbook
            }
        )
    }

    likeme = () =>{
        this.setState(
            {
                switchlike : !this.state.switchlike
            }
        )
    }

    componentDidMount(){
        console.log('article by mounted')
    }

    render(){
        const { classes } = this.props;
        return(     
        <div className={classes.root}>
        <Container  maxWidth="sm" style={{paddingTop :"20px"}} >
                <Box border={1} borderColor="#cccccc">
                <Grid container  className={classes.padding}>
                    <Grid item  sm={2} >  
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcbk08tKITjmAjYWODwsB41p_GpEv4CKl7-s56sOGAwGk-fqCA">
                    </Avatar>
                    </Grid>
                    <Grid item  sm={10} >   
                    <Typography ><b>Chandra Antonius P</b></Typography>
                    <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Deskription</Typography>
                    </Grid>
                </Grid>
                <Grid container  className={classes.padding}>
                    <Grid item  sm={12} >   
                    <CardActionArea href="/Article">
                        <CardMedia
                        className={classes.media}
                        image="https://miro.medium.com/max/3436/1*V7Si4unlnDsQ03Hg674y_A.jpeg"
                        />
                    </CardActionArea>
                    <Typography variant="h5" className={classes.spacing} >
                        <b>What We Should Have Learned in School But  Never Did</b>
                    </Typography>
                    <Typography variant="body1" className={classes.spacing} color="textSecondary" >
                        What We Should Have Learned in School But  Never Did
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container  className={classes.padding}>
                    <Grid item  sm={6} >   
        <Typography  color="textSecondary" style={{fontSize : "8pt"}}><Button className={classes.btn} onClick={this.likeme}>{this.state.switchlike ? <FavoriteBorderIcon/>: <FavoriteIcon/>} </Button> 269k</Typography>
                    </Grid>
                    <Grid item  sm={6} align="right" >   
                    <Typography  color="textSecondary" style={{fontSize : "8pt"}}>20 response<Button className={classes.btn} onClick={this.bookmarkme}>{this.state.switchbook ? <BookmarkBorderIcon/> : <BookmarkIcon/>} </Button></Typography>
                    </Grid>
                </Grid>
                </Box>
                <br></br>
        </Container>
        </div>
        
        )
    }
}

export default withStyles(Mystyle)(ArticleList);