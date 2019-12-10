import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import { maxWidth } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    size: {
        minHeight: '80vh',
        maxHeight: '80vh',
        maxWidth : '700px',
    },
  }));

export default function FormDialog() {

  const classes = useStyles();  
  const [open, setOpen] = React.useState(false);
  const [open1,setOpen1] = React.useState(false); 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const newhandleopen =() => {
      setOpen1(true);
  };
  const newhandleclose =() => {
    setOpen1(true);
  };
  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
        Register 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="md" maxHeight="md" align="center">
      <Grid container spacing={0} >
        <Grid item xs align="left">  
           
        </Grid>
        <Grid item xs={6}>
        <DialogTitle id="form-dialog-title">
            <h1>Join Medium.</h1>
            <DialogContentText style={{ fontSize:"10pt"}}>
            Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
          </DialogContentText>
        </DialogTitle>
        <DialogContent style={{fontSize:"10pt"}}>      
          <TextField
            id="name"
            label="Your Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="mail"
            label="Your Email"
            align="center"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="passowrd"
            label="Your Password"
            type="password"
            fullWidth
          />      
          <Button onClick={handleClose}
          style={{background : "black", color :"white", marginTop :"20px"}}>
            Registration
          </Button>

        <p >Already have an account?<Button onClick={handleClose}
          style={{background : "white", color :"Blue"}}>
            SignUp
          </Button></p> 
          <DialogContentText style={{marginBottom : "15px", fontSize:"10pt" }}>
          To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.       
         </DialogContentText>
         </DialogContent>
        </Grid  >  
        <Grid item xs align="right">
        <img src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"></img>
        </Grid>
      </Grid>  
      </Dialog>
    </div>
  );
}