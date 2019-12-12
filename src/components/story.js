import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const useStyles = makeStyles (theme =>({

    root :{
        flexGrow :  1,
    },

    padding :{
        padding : theme.spacing(2),
    }


}));

export default function Storyadd() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container  className={classes.padding}>
                        <Grid item  sm={1} >   
                        <Button><AddCircleOutlineIcon/></Button>
                        </Grid>
                        <Grid item  sm={11}  >   
                            <TextField 
                            id="title-text"
                            style={{ margin: 8 }}
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />      
                            <br/>
                            <br/>          
                            <TextField 
                            id="add-story"
                            style={{ margin: 8 }}
                            placeholder="Your Story Here"
                            fullWidth
                            multiline
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            />  
                        </Grid>
                </Grid>
            </Container>
        </div>
    );
}