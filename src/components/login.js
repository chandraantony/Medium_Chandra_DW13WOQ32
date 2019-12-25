import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'


const MyStyle = (theme => ({
  margintop: {
    margin: theme.spacing(2),
  },
  buttonstyle :{
    margin: theme.spacing(2),
    borderColor : "#00b36b",
    color : "#00b36b",
  },
  btnnomargin : {
    borderColor : "#00b36b",
    color : "#00b36b",
  }



}));



class Registrasi extends Component{
  constructor(){
    super();          
    this.state ={
      login : false
     
    }
    console.log(this.state.login)
  }

  closehandle = () => {
    this.setState(
      {
        login : false,
        email: '',
        password: ''
      }
    )
  };

  openLogin = () => {
    this.setState(
      {
        login : true,
        
      }
    )
    console.log(this.state.login)
  };


  handleChangeMail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  handleLogin = () => {
    axios.post('http://localhost:5000/api/v1/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){

    const {classes} = this.props;
    


    return(
        <div>
        <Dialog open={this.state.login} onClose={ () =>
        this.props.closeall()} aria-labelledby="form-dialog-title" align="center" maxWidth="md" style={{backgroundColor: 'transparent'}} fullWidth> 
        <Grid container >
        <Grid item xs={12} sm={3} align="left">
         
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h4" style={{paddingTop : "20pt"}}>Login Medium</Typography>
        <Typography className={classes.margintop} color="textSecondary" variant="caption">Login to personalized story recommendations, follow authors and topics you love, and interact with stories.</Typography>
        <DialogContent style={{fontSize:"10pt"}}>       
        <br/>
        <br/> 
            <div className={classes.margintop} style={{paddingTop:"30px"}}>
            <InputLabel htmlFor="standard-adornment-password">Your Mail</InputLabel>
            <Input
              value={this.state.email}
              onChange={this.handleChangeMail}
              fullWidth
              label="Your Mail"
              id="standard-adornment-password"
              type='text'
              />
            </div>   

            <div className={classes.margintop}>
            <InputLabel htmlFor="standard-adornment-password">Your Password</InputLabel>
            <Input
              value={this.state.password} 
              onChange={this.handleChangePassword}
              fullWidth
              label="Your Password"
              id="standard-adornment-password"
              type='password'
              />
            </div>  
            <br/>
            <Button variant="outlined" className={classes.buttonstyle} onClick={this.handleLogin} >Login</Button>
            <br/>
            <br/>
            <Typography className={classes.margintop}> Not Have Account ? <Button className={classes.btnnomargin} onClick={this.closehandle}>
            Register
            </Button>
            </Typography>
            <Typography variant="caption">To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.</Typography>
          </DialogContent>
        </Grid>
        <Grid item xs={12} sm={3} align="right">
       
        </Grid>
      </Grid>
      </Dialog>
        </div>


    );
  }
}
export default withStyles(MyStyle)(Registrasi)