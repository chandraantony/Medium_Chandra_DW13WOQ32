import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky", 
    top: "0", 
    zIndex :1000,
  },

}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
        <div align="center">
          <Button href="/">HOME</Button>
          <Button href="/Kategori">ONZERO</Button>
          <Button href="/Kategori">ELEMENTAL</Button>
          <Button href="/Kategori">GEN</Button>
          <Button href="/Kategori">ZORA</Button>
          <Button href="/Kategori">FORGE</Button>
          <Button href="/Kategori">HUMAN PARTS</Button>
          <Button href="/Kategori">MARKER</Button>
          <Button href="/Kategori">HEATED</Button>
          <Button href="/Kategori">MODUS</Button>
          <Button href="/Kategori">MORE</Button>
        </div>
      </AppBar>
    
    </div>
  );
}