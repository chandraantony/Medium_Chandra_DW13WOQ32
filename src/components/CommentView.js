import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField'

const useStyles = (theme => ({
    root: {
      flexGrow: 1,
    },
    img :{
        width : 50,
        height : 50,
    },
    padding :{
        padding : theme.spacing(2)
    },
    btnsize:{
      maxHeight: '20px', 
      minHeight: '20px',
      maxWidth: '20px', 
      minWidth: '20px',
      color:"#bf28a6",
      borderColor:"#bf28a6",
      fontSize : "8pt"
    },
    btn:{ 
      maxWidth: '30px', 
      maxHeight: '30px', 
      minWidth: '30px', 
      minHeight: '30px'
    },
  
  
  }));

class CommenView extends Component{
    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <Container  maxWidth="sm" style={{paddingTop :"20px"}} >
                    <Typography style={{fontSize : "10pt"}}><b>Showing response for :</b></Typography>
                    <br/>
                    <Box border={1} borderColor="gray">
                        <Grid container className={classes.padding} >
                                
                            <Grid item  sm={6} >        
                            <Typography style={{fontSize : "10pt"}}><b>Write smth here..</b></Typography>
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                            </Grid>
                            <Grid item  sm={6} align="right" >   
                            <Typography style={{fontSize : "10pt"}}><Button className={classes.btn}><FavoriteBorderIcon/></Button> 269k <Button className={classes.btn}><BookmarkBorderIcon/></Button> 269k</Typography>
                            </Grid>
                        
                        </Grid>
                        </Box>
                        <br/>
                        <br/>
                        <Typography style={{fontSize : "12pt"}} ><b>Response :</b></Typography>
                        <br/>

                        <Grid container  className={classes.padding}>
                            <Grid item  sm={2} >  
                            <Avatar>
                                W
                            </Avatar>
                            </Grid>
                            <Grid item  sm={9} >   
                            <TextField
                                id="standard-textarea"
                                label=""
                                placeholder="Write Something Here"
                                multiline
                                fullWidth
                            />
                            </Grid>
                        </Grid>
                        <br/>

                        <Box border={1} borderColor="gray">
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={2} >  
                            <Avatar>
                                W
                            </Avatar>
                            </Grid>
                            <Grid item  sm={10} >   
                            <Typography ><b>Write smth here..</b></Typography>
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                            </Grid>
                        </Grid>
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={12} >   
                            <Typography  style={{fontSize : "12pt"}}>Kelapa adalah anggota tunggal dalam marga Cocos dari suku aren-arenan atau Arecaceae. Arti kata kelapa dapat merujuk pada keseluruhan pohon kelapa, biji, atau buah, yang secara botani adalah pohon berbuah, bukan pohon kacang-kacangan.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={6} >   
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}><Button className={classes.btn}><FavoriteBorderIcon/></Button> 269k</Typography>
                            </Grid>
                            <Grid item  sm={6} align="right" >   
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>20 response<Button className={classes.btn}><BookmarkBorderIcon/></Button></Typography>
                            </Grid>
                        </Grid>
                        </Box>
                        <br></br>
                        <Box border={1} borderColor="gray">
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={2} >  
                            <Avatar>
                                W
                            </Avatar>
                            </Grid>
                            <Grid item  sm={10} >   
                            <Typography ><b>Write smth here..</b></Typography>
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>Bio here ....</Typography>
                            </Grid>
                        </Grid>
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={12} >   
                            <Typography  style={{fontSize : "12pt"}}>Kelapa adalah anggota tunggal dalam marga Cocos dari suku aren-arenan atau Arecaceae. Arti kata kelapa dapat merujuk pada keseluruhan pohon kelapa, biji, atau buah, yang secara botani adalah pohon berbuah, bukan pohon kacang-kacangan.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container  className={classes.padding}>
                            <Grid item  sm={6} >   
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}><Button className={classes.btn}><FavoriteBorderIcon/></Button> 269k</Typography>
                            </Grid>
                            <Grid item  sm={6} align="right" >   
                            <Typography  color="textSecondary" style={{fontSize : "8pt"}}>20 response<Button className={classes.btn}><BookmarkBorderIcon/></Button></Typography>
                            </Grid>
                        </Grid>
                        </Box>
                        
                </Container>
            </div>

        )
    }
}


export default withStyles(useStyles)(CommenView)