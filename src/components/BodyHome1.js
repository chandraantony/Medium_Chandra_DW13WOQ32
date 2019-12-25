import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import axios from 'axios';
import Moment from 'react-moment';


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
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500
    },
    image: {
      width: 200,
      height:200
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
  }));

class BodyHome1 extends Component {

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
        const {classes}  = this.props;
        let number = 1;
        return(
            <div className={classes.root} > 
                <Container maxWidth="lg">
                <Grid container spacing={1}>
                <Grid item xs  > 

                    <Paper className={classes.paper1}>
                    <Typography variant="h5" >
                        <b>Popular on Medium</b>

                            <hr></hr>
    
                    </Typography>
                    {this.state.article.slice(0,10).map(section => (
                    <Grid container spacing={2} style={{paddingTop : "10pt"}} key={section.id}>
                        
                        <Grid item >
                        <p style={{fontSize:"30pt"}}>
                        {number < 10 ?<font color="gray">0{number++}</font> : <font color="gray">{number}</font>}      
                        </p>
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography  variant="subtitle1"  component="h5">
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
                            <Moment format="D MMM YYYY">{section.createdAt}</Moment>{section.view}       
                            </Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                    
                    </Grid>
                    ),)} 
                    </Paper>
           
                    </Grid> 

                    <Grid item xs={9}>
                    {this.state.article.map(section => (
                    <Paper className={classes.card} elevation={0} key={section.id}> 
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm >
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs >
                            <div style={{ padding:"30pt" }}>
                            <Typography style={{fontSize : "10pt"}} color="textSecondary">
                            {section.category_Id.name} <i>Popular Topic</i>
                            </Typography>
                            <Typography variant="h5" >
                                <b>{section.title}</b>
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                            {section.title}             
                            </Typography>
                            <br/>
                            <Typography style={{fontSize : "10pt"}} > 
                            {section.author_Id.fullname} in {section.category_Id.name}  
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                            <Moment format="D MMM YYYY">{section.createdAt}</Moment> {section.view}         
                            </Typography>
                            </div>  
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid >
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <BookmarkIcon />   
                        </IconButton>
                        <IconButton> 
                            <MoreHorizIcon /> 
                            </IconButton> 
                        <ButtonBase className={classes.image} >
                            <img className={classes.img} alt="complex" src={section.image} />
                        </ButtonBase>
                        </Grid>
                    </Grid>
                    </Paper>
                    ),)}
                    </Grid>

                    

                    

                    
                </Grid>
            </Container>

            </div>
        )
    }
}

export default withStyles(useStyles)(BodyHome1);