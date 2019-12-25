import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FacebookIcon from '@material-ui/icons/Facebook';
import axios from 'axios'

const useStyles =(theme => ({
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
  
class ArticleBody extends Component{

  constructor(){
    super();
    this.state = {
      article: []
    }
    
  }

  componentDidMount(){
    const id = this.props.articleId;
    axios.get(`http://localhost:5000/api/v1/article/show/${id}`)
      .then(res => {
        const article = res.data;
        this.setState({article});
        console.log(this.state.article)

      })

  }
   
    render(){
        const {classes} =this.props;
        return(
            <div className={classes.root}> 
            {this.state.article.map(section => (
                <Container maxWidth="md" key={this.state.article}>
                    <ButtonBase >
                    <img className={classes.img} alt="complex" src={section.image} />
                    </ButtonBase>
                
                <div align="center">
                <br></br>
                <Link to={`/kategori/${section.categoryId}/article`} color="inherit" style={{textDecoration:"none"}}><Button variant="outlined">{section.category_Id.name}</Button></Link>
                </div>
                <Container maxWidth="sm" style={{paddingTop:"30pt", paddingBottom:"30pt"}} >
                    <Typography align="justify" variant="h4">
                    {section.title}
                    </Typography>
                    <Paper className={classes.paper} elevation ={0}>
                    <Grid container >
                    <Grid item sm={2} align="center">
                        <Avatar className={classes.avatar}> <img className={classes.img} alt="complex" src="https://miro.medium.com/max/1920/1*bNjaA_7cA-VEplEfb4rdwQ.gif" /></Avatar>
                    </Grid>
                    <Grid item  sm={7} >
                        <Typography style={{fontSize :"10pt"}} >{section.author_Id.fullname}<Button style={{ marginLeft:"10pt"}} variant="outlined" className={classes.btnsize} >FOLLOW</Button></Typography>
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
                {section.content}
                </Typography>
        
                </Container>
                
            </Container>
            ),)}
            </div>


        )
    }
}

export default withStyles(useStyles)(ArticleBody)