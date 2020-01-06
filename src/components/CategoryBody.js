import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { fetchOneCategory } from '../_action/categoryAction'


const useStyles = (theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      position : 'right',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    paper1: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "lg"
    },
    paper2: {
      margin: "auto",
      maxHeight: 500
    },
    image: {
      width: 300,
      height:100
    },
    image1: {
      width: "100%",
      height: 250
    },  
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    media: {
      height: 300,
      display: "flex",
      flexDirection : "column",
      justifyContent : "center",
      minWidth : "100%",
      
    },
    media1: {
      height: 170,
      
    },
    spacing: {
      padding: theme.spacing(2),
      height: 150,
      margin: "auto"
    },
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    
}));



class CategoryBody extends Component {
  


  componentDidMount(){
    const id = this.props.jambuid;
    this.props.dispatch(fetchOneCategory(id))
  

  }
  render(){
  
    const {classes} = this.props;
    
 
    return(
      <div className={classes.root}> 
          <Container maxWidth="md">
          {this.props.oneCategory.slice(0,1).map(section => (  
          <Grid container spacing={1}  key={section.id}  >
              <Grid item xs={12} >
              <Paper className={classes.card} >
              <Grid >
                  <ButtonBase className={classes.image} >
                      <h1 style={{color: '#bf28a6'}}>{section.category_Id.name}</h1>
                    </ButtonBase>
                  </Grid>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} >
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs >
                      <div style={{paddingTop:"15pt"}} >
                        <Typography variant="h6" >       
                          <font color="#bf28a6" >Medium</font>
                        </Typography>  
                        <Typography variant="h6" >       
                          Share Everything You Want
                        </Typography>  
                      </div>  
                      </Grid>
                    </Grid>             
                  </Grid>
                  <Grid item xs={3}  sm={6} >
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs >
                      <div style={{paddingTop:"30pt"}} >
                        <Typography align="right"> 
                        <Button variant="outlined" style={{color:"#bf28a6",borderColor:"#bf28a6"}}>Follow</Button>
                        </Typography>         
                      </div>  
                      </Grid>
                    </Grid> 
                  </Grid>     
                </Grid>
              </Paper>
              </Grid>
            </Grid>
          ),)}
            {this.props.oneCategory.slice(0,1).map(section => (                  
            <Grid container spacing={0} style={{paddingTop :"20pt"}} key={section.id} >
              <Grid item xs={12} sm={7} >
              <Card>
              <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      image={section.image}
                      />
              </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.media} style={{backgroundColor:"#00ffbf" }}>
                  <div align="center" style={{padding :"10pt"}} >
                        <Typography variant="subtitle1" > 
                          <b>{section.title}</b>
                        </Typography>
                        <Typography style={{fontSize :"10pt", }}> 
                        <br></br>
                        - {section.author_Id.fullname}
                        <br/>
                        {section.title}
                        <br/>
                        <Moment format="D MMM YYYY">{section.createdAt}</Moment>  
                        </Typography>
                  </div> 
              </Paper>
              </Grid>
            </Grid>
            ),)}
            {this.props.oneCategory.slice(1,2).map(section => ( 
            <Grid container spacing={0} style={{paddingTop :"20pt"}} key={section.id}>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.media} style={{backgroundColor:"#b3b3ff" }}>
                <div style={{padding :"10pt"}} align="center" >
                        <Typography variant="subtitle1" > 
                        <b>{section.title}</b>
                        </Typography>
                        <Typography style={{fontSize :"10pt", }}> 
                        <br></br>
                        -  {section.author_Id.fullname}
                        <br/>
                        {section.titele}
                        <br/>
                        <Moment format="D MMM YYYY">{section.createdAt}</Moment>   
                        </Typography>
                  </div> 
                </Paper>
              </Grid>  
              <Grid item xs={12} sm={7}>
              <Card>
              <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      image={section.image}
                      />
              </CardActionArea>
              </Card>
              </Grid>
            </Grid>
            ),)}
            <Grid container spacing={1} style={{paddingTop :"20pt"}}>
              <Grid item xs={12} >
              <Paper className={classes.card} style={{backgroundColor :"#ffffb3"}} >
              <Grid className={classes.image} >
                  </Grid>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm >
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs >
                      <div style={{padding :"20pt"}} >
                        <Typography variant="subtitle1" > 
                          <b>Even my oldest Echo, at five years old, works perfectly. This shouldn’t be a shocking revelation, but for a piece of technology these days, it is.</b>
                        </Typography>
                        <Typography style={{fontSize :"10pt", }}> 
                        <br></br>
                        - Megan Marrone
                        <br/>
                        Alexa Is My Problematic Fave
                        <br/>
                        Dec 9 . 6 min read
                        </Typography>
                      </div> 
                      </Grid>                
                    </Grid>    
                  </Grid>  
                </Grid>
              </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{paddingTop :"20pt"}}>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.media} style={{backgroundColor :"#ffc6b3"}}  >
                <div style={{padding :"10pt"}} align="center" >
                        <Typography variant="subtitle1" > 
                          <b>Even my oldest Echo, at five years old, works perfectly. This shouldn’t be a shocking revelation, but for a piece of technology these days, it is.</b>
                        </Typography>
                        <Typography style={{fontSize :"10pt", }}> 
                        <br></br>
                        - Megan Marrone 
                        <br/>
                        Alexa Is My Problematic Fave
                        <br/>
                        Dec 9 . 6 min read
                        </Typography>
                </div> 
                </Paper>
              </Grid>  
              <Grid item xs={12} sm={7}>
              <Card>
              <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      image="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                      />
              </CardActionArea>
              </Card>
              </Grid>
            </Grid>
            {this.props.oneCategory.slice(0,2).map(section => ( 
            <Grid container spacing={0} style={{paddingTop :"20pt"}} key={section.id}>
              <Grid item xs={12}>
              <Card>
              <CardActionArea>
                      <CardMedia
                      className={classes.media}
                      image={section.image}
                      />
              </CardActionArea>
              </Card>
              </Grid>  
            </Grid>
            ),)}

           

            
            <Container maxWidth="sm" style={{paddingTop:"30pt", paddingBottom:"30pt"}} >
            <hr/>
            {this.props.oneCategory.map(section => (  
            
            <Grid container spacing={0} style={{paddingTop :"10pt"}} key={section.id} >
              <Grid item xs={12} sm={9}>
              <Paper elevation={0}>
                  <Typography  variant="subtitle1"  >
                          <b>{section.title}</b>
                      </Typography>
                  
                      <Typography style={{fontSize:"10pt"}}>
                          <br/>
                          {section.title}       
                      </Typography>
                      <br/>
                      <Typography style={{fontSize:"10pt"}}> 
                          <br/>
                          <font color="#bf28a6">{section.author_Id.fullname} in {section.category_Id.name} </font>  
                      </Typography>
                      <Typography style={{fontSize:"10pt"}}>
                      <Moment format="D MMM YYYY">{section.createdAt}</Moment>         
                      </Typography>
                  </Paper>
              </Grid>  
              <Grid item xs={12} sm={3}>
              <Card>
              <CardActionArea>
                      <CardMedia
                      className={classes.media1}
                      image={section.image}
                      />
              </CardActionArea>
              </Card>
              </Grid>
            </Grid>
            
             ),)} 
            

            

            
            </Container>
        </Container>
    </div>

    )
  }
}
const mapStateToProps = state => ({
  oneCategory : state.categoryReducer.one 
}
)


export default connect(mapStateToProps)(withStyles(useStyles)(CategoryBody))