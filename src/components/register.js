import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Login from './login';

// SOURCE KODE REGISTER 


export default function FormDialog()  {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
        Register 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" align="center" maxWidth="md">     
      <Grid container spacing={0} >
        <Grid item item xs={12} sm={3} align="left">  
          <img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png"></img>
        </Grid>
        <Grid item xs={12} sm={6}>
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

          <p >Already have an account?
          <Button style={{background : "white", color :"Blue"}}>
            <Login/>
          </Button>
          </p> 
          <DialogContentText style={{marginBottom : "15px", fontSize:"10pt" }}>
          To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.       
         </DialogContentText>
         </DialogContent>
        </Grid  >  
        <Grid item item xs={12} sm={3} align="right">
          <img src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png"></img>
        </Grid>
      </Grid>  
      </Dialog>
    </div>
  );
}