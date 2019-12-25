import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const useStyles = (theme => ({
    root: {
      flexGrow: 1,
      position: "sticky", 
      top: "0", 
      zIndex :1000,
    },

    link : {
        textDecoration : "none",
        color : "black",
    },
  
  }));

  
class NavKategori extends Component {
    constructor(){
      super();
      this.state = {
        menu: []
      }
      
    }

    componentDidMount(){
      axios.get(`http://localhost:5000/api/v1/categories`)
        .then(res => {
          const menu = res.data;
          this.setState({ menu });
        })

    }

    render(){      
        const {classes} = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor : "white", color:"#ff6666",}}>
                <div align="center">
                {this.state.menu.map(section => (
                <Button key={section.id}><Link to={`kategori/${section.id}/article`} className={classes.link}  >{section.name}</Link></Button>
                ),)}
                </div>
            </AppBar>
            </div>
        );
    }
}
  
export default withStyles(useStyles)(NavKategori);