import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  img :{
      width : 100,
      height : 100,
      display:"block",
      margin:"auto"
  }


}));

export default function ProfileBody() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Container  maxWidth="sm" style={{paddingTop :"20px"}} >
        <Grid container>
            <Grid item xs={12}  sm={10} >  
            <Typography  variant="h5" ><b>Chandra Antonius P</b> 
            <Button variant="outlined" style={{marginLeft :"20pt"}}>Follow</Button>
            </Typography> 
           
            <Typography  color="textSecondary"  style={{marginTop :"14pt"}}><b>Write smth here..</b></Typography>
            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
            </Grid>
            <Grid item xs={12}  sm={2} >   
            <Avatar className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcbk08tKITjmAjYWODwsB41p_GpEv4CKl7-s56sOGAwGk-fqCA">
            </Avatar>
            </Grid>
            </Grid>
            <Paper elevation={0} style={{paddingTop:"20pt"}}>
                <b>Something Here</b>
            </Paper>
        </Container>
    </div>
  );
}