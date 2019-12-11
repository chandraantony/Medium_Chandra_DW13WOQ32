import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
  card: {
    maxWidth: 100,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
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
  },

  spacing :{
    padding : theme.spacing(2)
  }


}));

export default function SearchAppBar() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
       <Container maxWidth="lg" >
          <Grid container spacing={3} elevation={0}>
            <Grid item xs={12} sm={4} >
                <Card >
                    <CardActionArea href="/Article">
                        <CardMedia
                        className={classes.media}
                        image="https://miro.medium.com/max/3436/1*V7Si4unlnDsQ03Hg674y_A.jpeg"
                        />
                    </CardActionArea>
                    <Typography className={classes.spacing} >
                        What We Should Have Learned in School But  Never Did
                    </Typography>
                    <Paper className={classes.paper} elevation ={0} >
                        <Grid container >
                        <Grid item sm={2} align="center">
                            <Avatar className={classes.avatar}> <img className={classes.img} alt="complex" src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif" /></Avatar>
                        </Grid>
                        <Grid item  sm={7} >
                            <Typography  style={{fontSize : "10pt"}}>Chandra Antonius Purba</Typography>
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Dec 11, 2019 . 10 min read</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} align="right" style={{paddingTop:"10pt"}} >
                            <Button className={classes.btn}><ThumbUpIcon/></Button>
                            69k
                            <Button className={classes.btn}>|<BookmarkIcon/></Button>
                        </Grid>
                        </Grid>
                    </Paper>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} >

            </Grid>
            <Grid item xs={12} sm={4}>
    


            </Grid>
          </Grid>
          <hr  ></hr>
        </Container>

      </div>
      
    );  
  
}