import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';


export default function FormDialog()  {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };
  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen1} >
        LOGIN
      </Button>
      <Dialog open={open} onClose={handleClose1} aria-labelledby="form-dialog-title" align="center" maxWidth="md">     
      <Grid container spacing={0} >
        <Grid item xs={12} sm={3} align="left">  
        </Grid>
        <Grid item xs={12} sm={6}>
        <DialogTitle id="form-dialog-title">
            <h1>Sign in with email</h1>
            <DialogContentText style={{ fontSize:"10pt"}}>
            Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
          </DialogContentText>
        </DialogTitle>
        <DialogContent style={{fontSize:"10pt"}}>      
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
            id="password"
            label="Your Password"
            type="password"
            fullWidth
          />      
          <Button onClick={handleClose1}
          style={{background : "black", color :"white", marginTop :"20px"}}>
            Continue
          </Button>
          <br/>
          <br/>
          <div style={{paddingBottom :"70pt"}}>
         <Button onClick={handleClose1}
          style={{background : "white", color :"black"}}>
            <b> All sign option >> </b>
          </Button>
          </div>
         </DialogContent>
        </Grid  >  
        <Grid item xs={12} sm={3} align="right">

        </Grid>
      </Grid>  
      </Dialog>
    </div>
  );
}