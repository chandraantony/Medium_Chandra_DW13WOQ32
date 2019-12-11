import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// Code Soal Nomer 4 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky", 
    top: "0", 
    zIndex :1000,
  },

}));

const sections = [
  { title: 'HOME', url: '/' },
  { title: 'ONEZERO', url: '/Kategori' },
  { title: 'ELEMENTAL', url: '#' },
  { title: 'GEN', url: '#' },
  { title: 'ZORA', url: '#' },
  { title: 'FORGE', url: '#' },
  { title: 'HUMAN PARTS', url: '#' },
  { title: 'MARKER', url: '#' },
  { title: 'LEVEL', url: '#' },
  { title: 'HEATED', url: '#' },
  { title: 'MODUS', url: '#' },
  { title: 'MC', url: '#' },
];

export default function NavKategori() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
        <div align="center">
        {sections.map(section => (
        <Link href={section.url}><Button>{section.title}</Button></Link> 
        ))}
        </div>
      </AppBar>
    
    </div>
  );
}