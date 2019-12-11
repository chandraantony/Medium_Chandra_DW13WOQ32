import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor : "black",
  },
  title: {
    flexGrow: 1,
  },
  paper:{
    backgroundColor:'black', 
    color : "white",
  },

}));

export default function SearchAppBar() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
       <Container maxWidth="md">
          <Grid container spacing={3} >
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper} >
                <Typography variant="h9" className={classes.title}>
                <b>Jambu</b>
                </Typography> 
                <Typography variaon="caption" display="block" gutterBottom style={{fontSize :"8pt", paddingTop:"10pt",paddingBottom :"8pt", fontWeight:"bold" }}>
                Jambu batu (Psidium guajava) atau sering juga disebut jambu biji, jambu siki dan jambu klutuk adalah tanaman tropis yang berasal dari Brasil, disebarkan ke Indonesia melalui Thailand. Jambu batu memiliki buah yang berwarna hijau dengan daging buah berwarna putih atau merah dan berasa asam-manis.
                </Typography> 
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper} >
                <Typography variant="h9" className={classes.title}>
                <b>Jambu</b>
                </Typography> 
                <Typography variaon="caption" display="block" gutterBottom style={{fontSize :"8pt", paddingTop:"10pt",paddingBottom :"8pt", fontWeight:"bold"}}>
                Jambu batu (Psidium guajava) atau sering juga disebut jambu biji, jambu siki dan jambu klutuk adalah tanaman tropis yang berasal dari Brasil, disebarkan ke Indonesia melalui Thailand. Jambu batu memiliki buah yang berwarna hijau dengan daging buah berwarna putih atau merah dan berasa asam-manis.
                </Typography> 
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} >
                <Typography variant="h9" className={classes.title}>
                <b>Jambu</b>
                </Typography> 
                <Typography variaon="caption" display="block" gutterBottom style={{fontSize :"8pt", paddingTop:"10pt",paddingBottom :"8pt", fontWeight:"bold"}}>
                Jambu batu (Psidium guajava) atau sering juga disebut jambu biji, jambu siki dan jambu klutuk adalah tanaman tropis yang berasal dari Brasil, disebarkan ke Indonesia melalui Thailand. Jambu batu memiliki buah yang berwarna hijau dengan daging buah berwarna putih atau merah dan berasa asam-manis.
                </Typography> 
              </Paper>
            </Grid>
          </Grid>
          <hr  ></hr>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Link href="/" style={{ textDecoration: 'none',color :"white"}}>Medium </Link>
            </Typography>
            <Link href="/" style={{ textDecoration: 'none',color :"white", marginRight:"10pt"  }}>Medium </Link>
            <Link href="/" style={{ textDecoration: 'none',color :"white", marginRight:"10pt" }}>Medium </Link>
            <Link href="/" style={{ textDecoration: 'none',color :"white" }}>Medium </Link>
          </Toolbar>
        </Container>

      </div>
      
    );  
  
}