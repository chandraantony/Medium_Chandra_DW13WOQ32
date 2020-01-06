import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import setAuth from '../auth/authorize'
import Grid from '@material-ui/core/Grid';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Login from './Login';
import axios from 'axios';

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
  },
  bgopacity :{
    
  },




}));



class Registrasi extends Component{
  constructor(){
    super();
    this.child = React.createRef();
    this.state ={
      modalregis : false,
      fullname : '',
      email : '',
      password : '',
    }
    
  }

  handleChangeName = (event) => {
    this.setState({
      fullname: event.target.value
    })
  }
  
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

  closehandle = () => {
    this.setState(
      {
        modalregis : false,
      }
    )
  };

  openRegis = () => {
    this.setState(
      {
        modalregis : true,
      }
    )
  };
  
  onClick = () => {

   
    this.child.current.openLogin();

  };

  handleSignup = (event) => {
    axios.post('http://localhost:5000/api/v1/register', {
      fullname : this.state.fullname,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      const token = res.data.token
      localStorage.setItem('Secret-Code', token)
      
      if(token){
        console.log(token)
        setAuth(token);
      }else{
        console.log(res.data)
      }

    })
    .catch(err => {
      console.log(err)
    })
    event.preventDefault();
  }
  
  componentDidMount(){
  }

  render(){

    const {classes} = this.props;
    return(
        <div  >
        
        <Dialog open={this.state.modalregis} onClose={this.closehandle} aria-labelledby="form-dialog-title" align="center"  maxWidth="md"  fullWidth> 
        <Grid container >
        <Grid item xs={12} sm={3} align="left">
          <img alt="left" src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h4" style={{paddingTop : "20pt"}}>Join Medium</Typography>
        <Typography className={classes.margintop} color="textSecondary" variant="caption">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</Typography>
        <DialogContent style={{fontSize:"10pt"}}>       
        
            <div className={classes.margintop}>
            <InputLabel htmlFor="standard-adornment-password">Your Name</InputLabel>
            <Input
              onChange={this.handleChangeName}
              value =  {this.state.fullname}
              fullWidth
              label="Your Name"
              id="standard-adornment-password"
              type='email'
              />
            </div>   
          
            <div className={classes.margintop}>
            <InputLabel htmlFor="standard-adornment-password">Your Mail</InputLabel>
            <Input
              onChange={this.handleChangeMail}
              value = {this.state.email}
              fullWidth
              label="Your Mail"
              id="standard-adornment-password"
              type='text'
              />
            </div>   

            <div className={classes.margintop}>
            <InputLabel htmlFor="standard-adornment-password">Your Password</InputLabel>
            <Input
              onChange={this.handleChangePassword}
              value = {this.state.password}
              fullWidth
              label="Your Password"
              id="standard-adornment-password"
              type='password'
              />
            </div>  
            <Login ref={this.child} closeall={this.closehandle}></Login>
            <Button variant="outlined" className={classes.buttonstyle} onClick={this.handleSignup} >sign-up</Button>
            <Typography className={classes.margintop}>Already Have Account 
            <Button onClick={this.onClick} className={classes.btnnomargin}>
            sign-in
            </Button>
            </Typography>
            <Typography variant="caption">To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.</Typography>
          </DialogContent>
        </Grid>
        <Grid item xs={12} sm={3} align="right">
          <img alt="right" src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png" />
        </Grid>
      </Grid>
      </Dialog>
        </div>


    );
  }
}
export default withStyles(MyStyle)(Registrasi)