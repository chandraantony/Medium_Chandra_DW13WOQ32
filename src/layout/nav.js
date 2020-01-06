import React, {Component} from 'react';
import {fade,withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Registrasi  from '../components/Registration';


const useStyles = (theme => ({
    grow: {
      flexGrow: 1,  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    colorappbar :{
      backgroundColor : "white",
      color : "black",
    },
    
    boxStyle :{
      width : 220,
      padding : theme.spacing(2),
    },
  
    avatar :{
      width : 60,
      height : 60,
    },
  
    linkstyle :{
      textDecoration : "none", color: "black"
    },
    btnstyle :{
      marginTop : "5pt",
      maxHeight: '30px', 
      minHeight: '30px',
      fontSize :  "10pt",
      color : "#2e7d32",
      borderColor :   "#2e7d32",
      
    }
  
  
  }));



class Nav extends Component {

    

    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl : null,
            isMenuOpen : false,
            isMobileMenuOpen :false,
            regis : false,
            regisclose : false

        }
        console.log('nav success')
    }

    handleProfileMenuOpen = (event) => {
        this.setState(
            {
               anchorEl : event.currentTarget,
               isMenuOpen : true,
                
              
            }
              
        )
   
      };
    
    handleMobileMenuClose = () => {

        this.setState(
            {
                mobileMoreAnchorEl: null,
                isMobileMenuOpen : false,
            }
        )
        console.log(this.state.isMobileMenuOpen);
      };
   
    handleMenuClose = () => {
        this.setState(
            {
                anchorEl : null,
                isMenuOpen : false,
                
            }
        )
        this.handleMobileMenuClose();
      };
    
    handleMobileMenuOpen = event => {
        this.setState(
            {
                mobileMoreAnchorEl : event.currentTarget,
                isMobileMenuOpen : true
            }
        )
        
      };

    openRegis = () =>{
        this.setState (
            {
                regis : true      
            }
        )
        
    }

    closeRegis = () =>{
      this.setState (
          {
              regis : false        
          }
      )
      
  }

  onClick = () => {
    this.child.current.openRegis();
  };


    componentDidMount(){
        console.log(this.state.isMenuOpen)
    }

    render(){
        const {classes} = this.props;
        const menuId = 'primary-search-account-menu';       
        const mobileMenuId = 'primary-search-account-menu-mobile';
                

        return(
            <div className={classes.grow}>
            <AppBar position="static" className={classes.colorappbar} elevation={0}>
              <Toolbar>
                
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                > 
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                 <Link to="/" ><Button style={{fontSize:"16pt"}} ><b>MEDIUM</b></Button></Link> 
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
{/* 
                <Registrasi ref={this.child}/>
                  <Button className={classes.btnstyle} onClick={this.onClick} variant="outlined">Sign-Up</Button> */}
                 
                  {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton> */}
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={event => this.handleProfileMenuOpen(event)}
                    color="inherit"
                  >
                    <AccountCircle />
                    </IconButton>  
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={event => this.handleMobileMenuOpen(event)}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            
            <Menu
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={this.state.isMenuOpen}
            onClose={this.handleMenuClose}
          >
      
            <Box className={classes.boxStyle}>
            
              
              <Grid container wrap="nowrap" >
                 <Grid item xs={8}>
                    <Typography><b>Chandra Antonius Purba</b></Typography>
                    <Typography  noWrap color="textSecondary" variant="caption">Online</Typography>
                 </Grid>
                 <Grid item xs={4} align="right"> 
                 <Avatar className={classes.avatar} >W</Avatar>
                 </Grid>
              </Grid>
              <br></br>
              <Grid container>
                <Grid item xs={12}>
                  <MenuItem ><Link to='/' style={{textDecoration : "none", color: "black"}} >Home</Link></MenuItem>
                  <MenuItem ><Link to='/profile' style={{textDecoration : "none", color: "black"}} >Profile</Link></MenuItem>
                  <MenuItem onClick={this.handleMenuClose}>Story</MenuItem>
                  <MenuItem onClick={this.handleMenuClose}>Add Story</MenuItem>
                  <MenuItem onClick={this.handleMenuClose}>Statistic</MenuItem>
                  <MenuItem onClick={this.handleMenuClose}>Bookmark</MenuItem>
                </Grid>
            </Grid>
            </Box>
          </Menu>
            <Menu
            anchorEl={this.state.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={this.state.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}

          >
            <MenuItem>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={event => this.handleProfileMenuOpen(event)}>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Profile</p>
            </MenuItem>
          </Menu>        

            </div>

        )
    }

}

export default withStyles(useStyles)(Nav);