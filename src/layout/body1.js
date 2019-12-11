import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



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

export default function AutoGrid() {
  const classes = useStyles();

  return (
  <div className={classes.root} > 
    <Container maxWidth="lg">
     <Grid container spacing={1}>
     <Grid item xs style={{position: "sticky", top: "0", height: "100vh"}} > 
        <Paper className={classes.paper1}>
        <Typography variant="h5" >
            <b>Popular on Medium</b>
            <p>
                <hr></hr>
            </p>
        </Typography>
          <Grid container spacing={2}>
            <Grid item text>
               <p style={{fontSize:"30pt"}}>
                <font color="gray">01</font> 
              </p>
       
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
        <Paper className={classes.paper1}>
          <Grid container spacing={2}>
            <Grid item>
            <p style={{fontSize:"30pt"}}><font color="gray">02</font></p>
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
        <Paper className={classes.paper1}>
          <Grid container spacing={2}>
            <Grid item>
            <p style={{fontSize:"30pt"}}><font color="gray">03</font></p>
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
        <Paper className={classes.paper1}>
          <Grid container spacing={2}>
            <Grid item>
            <p style={{fontSize:"30pt"}}><font color="gray">04</font></p>
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
        </Grid> 
        <Grid item xs={9}>
        <Paper className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{ padding:"30pt" }}>
                <Typography style={{fontSize : "10pt"}} color="textSecondary">
                      CREATIVITY <i>Popular Topic</i>
                </Typography>
                <Typography variant="h5" >
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "10pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
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
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{ padding:"30pt" }}>
                <Typography style={{fontSize : "10pt"}} color="textSecondary">
                      CREATIVITY <i>Popular Topic</i>
                </Typography>
                <Typography variant="h5" >
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "10pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
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
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{ padding:"30pt" }}>
                <Typography style={{fontSize : "10pt"}} color="textSecondary">
                      CREATIVITY <i>Popular Topic</i>
                </Typography>
                <Typography variant="h5" >
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "10pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
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
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{ padding:"30pt" }}>
                <Typography style={{fontSize : "10pt"}} color="textSecondary">
                      CREATIVITY <i>Popular Topic</i>
                </Typography>
                <Typography variant="h5" >
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "10pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
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
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                <div style={{ padding:"30pt" }}>
                <Typography style={{fontSize : "10pt"}} color="textSecondary">
                      CREATIVITY <i>Popular Topic</i>
                </Typography>
                <Typography variant="h5" >
                      <b>The Economics of the Boomers</b>
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                  America is getting older. This is not a coincidence.               
                  </Typography>
                  <br/>
                  <Typography style={{fontSize : "10pt"}} > 
                  Sam McKenzie Jr. in Level
                  </Typography>
                  <Typography  color="textSecondary" style={{fontSize : "10pt"}}>
                      Feb 19, 2017 . 7 min read .          
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
                <img className={classes.img} alt="complex" src="https://miro.medium.com/max/2400/1*Q7VnYoqb2lVzx7sxOf93Bg.png" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
        </Grid>
      </Grid>
   </Container>

  </div>

  );
}