import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles(theme => ({
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
  },
  media1: {
    height: 230,
  },
  spacing: {
    padding: theme.spacing(2),
    height: 200,
    margin: "auto"
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  centerpos :{

    paddingTop: "50%",
    paddingLeft: "50%",
    transform: "translate(-50%, -50%)",
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
  <div className={classes.root}> 
    <Container maxWidth="lg">
     <Grid container spacing={1} >
        <Grid item xs={12} >
        <Paper className={classes.card} >
        <Grid >
            <ButtonBase className={classes.image} >
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" />
              </ButtonBase>
            </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{paddingTop:"15pt"}} >
                  <Typography variant="h6" > 
                  <font color="#bf28a6">The front lines of the future.</font> A Medium publication about
                  </Typography>
                  
                  </div>  
                </Grid>
                
              </Grid>
              
            </Grid>
            <Grid item xs={3} sm >
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

      <Grid container spacing={3} style={{paddingTop :"20pt"}}>
        <Grid item xs={7}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png"
                />
        </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.media} >
              <Typography >
                  asdasdjasdisaud
              </Typography>
              <Typography >
                  asdasdjasdisaud
              </Typography>
        </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{paddingTop :"20pt"}}>
        <Grid item xs={5}>
          <Paper className={classes.media} >asdasdasdasd</Paper>
        </Grid>  
        <Grid item xs={7}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/2400/1*FmMLsjcukXpE2EtT-lV2Sw.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{paddingTop :"20pt"}}>
        <Grid item xs={12} >
        <Paper className={classes.card} style={{backgroundColor :"#5eff89"}} >
        <Grid className={classes.image} >
            </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{padding :"30pt"}} >
                  <Typography variant="h5" > 
                    Even my oldest Echo, at five years old, works perfectly. This shouldn’t be a shocking revelation, but for a piece of technology these days, it is.
                  </Typography>
                  <Typography variant="h9" > 
                   <p>- Megan Marrone</p> 
                   <br/>
                   Alexa Is My Problematic Fave
                   <br/>
                   Dec 9 . 6 min read
                  </Typography>
                </div>  
                </Grid>                
              </Grid>    
            </Grid>  
            <Grid className={classes.image} >
            </Grid>
          </Grid>
        </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{paddingTop :"20pt"}}>
        <Grid item xs={5}>
          <Paper className={classes.media} >asdasdasdasd</Paper>
        </Grid>  
        <Grid item xs={7}>
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

      <Grid container spacing={3} style={{paddingTop :"20pt"}}>
        <Grid item xs={12}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/7360/1*xVjj__UtEx3JZi0oX3BgCA.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>  
      </Grid>

      
      <Container maxWidth="md" style={{paddingTop:"30pt", paddingBottom:"30pt"}} >
      <hr />
      <Grid container spacing={0} style={{paddingTop :"20pt"}}>
        <Grid item xs={9}>
        <Paper className={classes.spacing}>
            <Typography  variant="h5"  >
                    <b>The Joy Beign an Untethered Woman</b>
                </Typography>
                <Typography   variant="h7">
                    <br/>
                <b>Beijing’s ‘autocracy as a service’ is becoming the top choice for governments that want to control the internet </b>          
                </Typography>
                <br/>
                <Typography variant="h9" > 
                    <br/>
                    <font color="#bf28a6">Anna Graham Hunter in Human Parts</font>  
                </Typography>
                <Typography  variant="h9">
                    <br/>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
        </Grid>  
        <Grid item xs={3}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media1}
                image="https://miro.medium.com/max/756/1*ACmTRkOU32pulp1DO7YBeg.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{paddingTop :"20pt"}}>
        <Grid item xs={9}>
        <Paper className={classes.spacing}>
            <Typography  variant="h5"  >
                    <b>The Joy Beign an Untethered Woman</b>
                </Typography>
                <Typography   variant="h7">
                    <br/>
                <b>Beijing’s ‘autocracy as a service’ is becoming the top choice for governments that want to control the internet </b>          
                </Typography>
                <br/>
                <Typography variant="h9" > 
                    <br/>
                    <font color="#bf28a6">Anna Graham Hunter in Human Parts</font>  
                </Typography>
                <Typography  variant="h9">
                    <br/>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
        </Grid>  
        <Grid item xs={3}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media1}
                image="https://miro.medium.com/max/7360/1*xVjj__UtEx3JZi0oX3BgCA.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{paddingTop :"20pt"}}>
        <Grid item xs={9}>
        <Paper className={classes.spacing}>
            <Typography  variant="h5"  >
                    <b>The Joy Beign an Untethered Woman</b>
                </Typography>
                <Typography   variant="h7">
                    <br/>
                <b>Beijing’s ‘autocracy as a service’ is becoming the top choice for governments that want to control the internet </b>          
                </Typography>
                <br/>
                <Typography variant="h9" > 
                    <br/>
                    <font color="#bf28a6">Anna Graham Hunter in Human Parts</font>  
                </Typography>
                <Typography  variant="h9">
                    <br/>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
        </Grid>  
        <Grid item xs={3}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media1}
                image="https://miro.medium.com/max/5514/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>
      </Grid>

      <Grid container spacing={0} style={{paddingTop :"20pt"}}>
        <Grid item xs={9}>
        <Paper className={classes.spacing}>
            <Typography  variant="h5"  >
                    <b>The Joy Beign an Untethered Woman</b>
                </Typography>
                <Typography   variant="h7">
                    <br/>
                <b>Beijing’s ‘autocracy as a service’ is becoming the top choice for governments that want to control the internet </b>          
                </Typography>
                <br/>
                <Typography variant="h9" > 
                    <br/>
                    <font color="#bf28a6">Anna Graham Hunter in Human Parts</font>  
                </Typography>
                <Typography  variant="h9">
                    <br/>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
        </Grid>  
        <Grid item xs={3}>
        <Card>
        <CardActionArea>
                <CardMedia
                className={classes.media1}
                image="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
        </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      
      </Container>
   </Container>
  </div>

  );
}