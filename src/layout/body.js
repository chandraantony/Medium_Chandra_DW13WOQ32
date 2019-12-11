import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { minWidth } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop :"20px",
    flexGrow: 1,
    borderBottom: 0,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
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
    padding: theme.spacing(0),
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

export default function AutoGrid() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
  <Container maxWidth="lg" >
    <div className={classes.root} >
      <Grid container spacing={3}>
      <Grid item xs elevation={0}>
          <Card >
            <CardActionArea href="/Article">
                <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/3436/1*V7Si4unlnDsQ03Hg674y_A.jpeg"
                />
            </CardActionArea>
            <Paper className={classes.paper1} >
            <Typography  variant="h5"  component="h2">
                    <b>The Joy Beign an Untethered Woman</b>
                </Typography>
                <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                    On sex, solitude, and female friendship                
                </Typography>
                <br/>
                <Typography style={{fontSize : "9pt"}} > 
                    Anna Graham Hunter in Human Parts    
                </Typography>
                <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
          </Card>
        </Grid>
        
        <Grid item xs>
        <Paper className={classes.paper2}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography  variant="h9"  component="h5">
                      <b>I’ve Been Accused of ‘Acting White,’ but I’m Not the Real Problem</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      On sex, solitude, and female friendship                
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "9pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper2}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography  variant="h9"  component="h5">
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "9pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper2}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography  variant="h9"  component="h5">
                      <b>Spotify’s Year-End Lists Are the Ultimate Personality Test</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  Why the mass sharing of the music streaming service’s year-end lists is uniquely telling              
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "9pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        </Grid>
        <Grid item xs>
        <Card>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/7360/1*xVjj__UtEx3JZi0oX3BgCA.jpeg"
                />
            </CardActionArea>
           
            <Paper className={classes.paper1}>
            <Typography  variant="h5"  component="h2">
                    <b>Alexa Is My Problematic Fave</b>
                </Typography>
                <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                    On sex, solitude, and female friendship                
                </Typography>
                <br/>
                <Typography style={{fontSize : "9pt"}} > 
                    Anna Graham Hunter in Human Parts    
                </Typography>
                <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                    Feb 19, 2017 . 7 min read .          
                </Typography>
            </Paper>
          </Card>
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
  );
}