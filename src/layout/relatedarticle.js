import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import axios from 'axios';
import Moment from 'react-moment';

const useStyles = (theme => ({
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
    maxWidth: '20px', 
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

class RelatedArticle extends Component{
  constructor(){
    super();
    this.state = {
      article: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/v1/articles/popular`)
      .then(res => {
        const article = res.data;
        this.setState({ article });
      })

  }
  render(){
    const {classes} = this.props
    return(
      <div className={classes.root}>
          <Container maxWidth="lg" >
            <Grid container spacing={3} elevation={0}>
            {this.state.article.slice(0,3).map(section => (
              <Grid item xs={12} sm={4} key={section.id} >
                  <Card >
                      <CardActionArea href="/Article" >
                          <CardMedia
                          className={classes.media}
                          image={section.image}
                          />
                      </CardActionArea>
                      <Typography className={classes.spacing} >
                          {section.title}
                      </Typography>
                      <Paper className={classes.paper} elevation ={0} >
                          <Grid container >
                          <Grid item sm={2} align="center">
                              <Avatar className={classes.avatar}> <img className={classes.img} alt="complex" src={section.image} /></Avatar>
                          </Grid>
                          <Grid item  sm={7} >
                              <Typography  style={{fontSize : "10pt"}}>{section.author_Id.fullname}</Typography>
                              <Typography  color="textSecondary" style={{fontSize : "8pt"}}><Moment format="D MMM YYYY">{section.createdAt}</Moment></Typography>
                          </Grid>
                          <Grid item xs={12} sm={3} align="right" style={{paddingTop:"10pt"}} >
                              <Button className={classes.btn}><ThumbUpIcon/></Button>
                              69k
                              <Button className={classes.btn}><BookmarkIcon/></Button>
                          </Grid>
                          </Grid>
                      </Paper>
                  </Card>
              </Grid>
            ),)}
    
            </Grid>
            <hr  ></hr>
          </Container>

        </div>
    )
  }
}

export default withStyles(useStyles)(RelatedArticle)