import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// Source Code Nomer 4

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky", 
    top: "0", 
    zIndex :1000,
  },

}));

const listsections = [
  { kategori: 'HOME', url: '/' },
  { kategori: 'ONEZERO', url: '/Kategori' },
  { kategori: 'ELEMENTAL', url: '#' },
  { kategori: 'GEN', url: '#' },
  { kategori: 'ZORA', url: '#' },
  { kategori: 'FORGE', url: '#' },
  { kategori: 'HUMAN PARTS', url: '#' },
  { kategori: 'MARKER', url: '#' },
  { kategori: 'LEVEL', url: '#' },
  { kategori: 'HEATED', url: '#' },
  { kategori: 'MODUS', url: '#' },
  { kategori: 'MORE', url: '#' },
];

export default function NavKategori() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor : "white", color:"black",}}>
        <div align="center">
        {listsections.map(section => (
        <Link href={section.url}><Button>{section.kategori}</Button></Link> 
        ))}
        </div>
      </AppBar>
    
    </div>
  );
}