import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchCategory } from '../_action/categoryAction'

const useStyles = (theme => ({
    root: {
      flexGrow: 1,
      position: "sticky", 
      top: "0", 
      zIndex :1000,
    },

    link : {
        textDecoration : "none",
        color : theme.palette.text.secondary,
    },
    link2 : {
      textDecoration : "none",
      color : "black",
  },
  
  }));

  
class NavKategori extends Component {

    componentDidMount(){
      this.props.dispatch(fetchCategory())
    }

    render(){      
        const {classes} = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor : "white", color:"#ff6666",}} elevation={0}>
                <div align="center">
                <Button  variant="outlined" key="home"><Link to="/" className={classes.link2} >Home</Link></Button>  
                {this.props.menu.map(section => (
                <Button  key={section.id}><Link to={`kategori/${section.id}/article`} className={classes.link}  >{section.name}</Link></Button>
                ),)}
                </div>
            </AppBar>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
  menu : state.categoryReducer.all
  
}

)

export default connect(mapStateToProps)(withStyles(useStyles)(NavKategori));