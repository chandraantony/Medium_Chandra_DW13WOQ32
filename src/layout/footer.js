import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },


}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
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
  );
}