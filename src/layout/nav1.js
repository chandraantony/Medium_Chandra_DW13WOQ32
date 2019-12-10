import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky", 
    top: "0", 
  },

}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
        <div align="center">
          <Button>HOME</Button>
          <Button>ONZERO</Button>
          <Button>ELEMENTAL</Button>
          <Button>GEN</Button>
          <Button>ZORA</Button>
          <Button>FORGE</Button>
          <Button>HUMAN PARTS</Button>
          <Button>MARKER</Button>
          <Button>HEATED</Button>
          <Button>MODUS</Button>
          <Button>MORE</Button>
        </div>
      </AppBar>
    
    </div>
  );
}