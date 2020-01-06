import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { fetchArticles } from '../_action/articleAction';


const useStyles = (theme => ({
    root: {
      paddingTop :"40px",
      flexGrow: 1,
      borderBottom: 0,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 200,
    },
    card: {
      maxWidth: 345,
    },
    paper1: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    
    },
    paper2: {
      padding: theme.spacing(1),
      margin: "auto",
      maxWidth: 500,
      minWidth: 500
    },
    image: {
      width: 80,
      height: 80
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    linkstyle: {
      '& > * + *': {
        textDecoration :"none",
        '&:hover': {
          textDecoration: "none",
        },
      },
    },
  }));


  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  

class BodyHome extends Component {

  componentDidMount(){
    this.props.dispatch(fetchArticles());
  }
   

    render(){
        const {classes} = this.props;
        const shuffle = shuffleArray(this.props.article)
        const shuffle1 = shuffleArray(shuffle)
        console.log(this.props.article)
        return(
          
              <Container maxWidth="lg" >
                <div className={classes.root} >
                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} >
                  {shuffle1.slice(0,1).map(section => (
                      <Card elevation={0} key={section.id} >
                        <CardActionArea href={`article/${section.id} `}>
                            <CardMedia
                            className={classes.media}
                            image={section.image}
                            />
                        </CardActionArea>
                        <Paper className={classes.paper1} >
                        <Typography  variant="body1"  component="h2">
                                <b>{section.title}</b>
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                                {section.title}               
                            </Typography>
                            <br/>
                            <Typography style={{fontSize : "9pt"}} > 
                            {section.author_Id.fullname} in {section.category_Id.name}     
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                            <Moment format="D MMM YYYY">{section.createdAt}</Moment>
                            </Typography>
                        </Paper>
                      </Card>
                        ),)}  
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={4}  >   

                    {shuffle1.slice(0,3).map(section => (
                      <Grid container spacing={2} key={section.id} > 
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={section.image} />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography  variant="body2"  >
                              <b>{section.title}</b>
                              </Typography>
                              <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                              {section.title}               
                              </Typography>
                              <br/>
                              <Typography style={{fontSize : "9pt"}} > 
                              {section.author_Id.fullname} in {section.category_Id.name} 
                              </Typography>
                              <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                              <Moment format="D MMM YYYY">{section.createdAt}</Moment>           
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      ),)}  
                                     
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    {this.props.article.slice(0,1).map(section2 => (
                      <Card elevation={0} key={section2.id} >
                        <CardActionArea to="/article">
                            <CardMedia
                            className={classes.media}
                            image={section2.image}
                            />
                        </CardActionArea>
                        <Paper className={classes.paper1} >
                        <Typography  variant="body1"  component="h2">
                                <b>{section2.title}</b>
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                                {section2.title}               
                            </Typography>
                            <br/>
                            <Typography style={{fontSize : "9pt"}} > 
                            {section2.author_Id.fullname} in {section2.category_Id.name}     
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                            <Moment format="D MMM YYYY">{section2.createdAt}</Moment>
                            </Typography>
                        </Paper>
                      </Card>
                        ),)}
                    </Grid>
                  </Grid>
                </div>
                <br/>
                <br/>
                <Typography align="right" >
                  <Button><b>SEE ALL FEATURED ></b></Button>
                </Typography>
                <br/>
                <hr color ="#c2b2b0"></hr>
                </Container>
            
            
        )
    }
}

const mapStateToProps = state => ({
  article : state.articleReducer.all
  
}

)


export default connect(mapStateToProps)(withStyles(useStyles)(BodyHome))