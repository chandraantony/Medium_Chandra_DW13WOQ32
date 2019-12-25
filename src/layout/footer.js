import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';




const useStyles = (theme => ({
  root: {
    flexGrow: 1,
  },


}));



class Footer extends Component {
  constructor(){
    super();
    console.log("berhasil");
  }

  componentDidMount(){
    console.log('Did Mount');
  }

  render(){
    const classes = this.props
    return(
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
            <div align="right" style={{paddingBottom :"10pt",paddingTop: "10pt"}}>
              <Button>HOME</Button>
              <Button>ONZERO</Button>
              <Button>ELEMENTAL</Button>
              <Button>GEN</Button>
              <Button>ZORA</Button>
              <Button>FORGE</Button>
            </div>
          </AppBar>
        </div>
    )
  }
} 


export default withStyles(useStyles)(Footer)