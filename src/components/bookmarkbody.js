import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles (theme =>({

    root :{
        flexGrow :  1,
    },

    padding :{
        padding : theme.spacing(2),
    }


}));

export default function Bokkmarkme() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <h2><b>BOOKMARK</b></h2>
                <Box border={1} borderColor="gray">
                <Grid container  className={classes.padding}  >
                        <Grid item  sm={1} align="center" style={{paddingTop : "5pt"}} >  
                        <BookmarkBorderIcon/>
                        </Grid>
                        <Grid item  sm={10}  > 
                        <Typography style={{fontSize:"20pt"}}>| <b >Offline reading is here.</b></Typography>  
                        </Grid>
                        <Grid item  sm={1}  >   
                        <Button aling="left" variant="outlined" style={{backgroundColor:"black", color:"white"}}>Upgrade</Button>
                        </Grid>
                </Grid>
                </Box>
                <br></br>
                <Box border={1} borderColor="#e6e6e6">
                <Grid container  className={classes.padding}  >
                        <Grid item  sm={12}>  
                        <Typography style={{fontSize : "18pt"}}><b>Title</b></Typography>
                        <br/>
                        <Typography  color="textSecondary" style={{fontSize : "10pt"}}>Summary of text</Typography>
                        <Typography style={{fontSize : "10pt"}}><b>Chandra Ap . January 2019</b></Typography>
                        <br/>
                        <Link href="#" color="textSecondary" style={{fontSize : "10pt"}}>Remove</Link>
                        </Grid>
                </Grid>
                </Box>
            </Container>
        </div>
    );
}