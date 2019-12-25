import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box boxShadow={1} p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles (theme =>({

    root :{
        flexGrow :  1,
    },

    padding :{
        padding : theme.spacing(2),
    }

}));

export default function ListStory() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container  className={classes.padding}>
                        <Grid item  sm={6} >   
                        <Typography variant="h4">
                            <b>Your Stories</b>
                        </Typography>
                        </Grid>
                        <Grid item  sm={6}  align="right">   
                            <Button variant="outlined" style={{marginRight : "10pt"}}>Import Story</Button>
                            <Button variant="outlined" style={{color:"#bf28a6"}}>write a story</Button>
                        </Grid>
                </Grid>
            <AppBar elevation={0} position="static" style={{backgroundColor : "white", color :"black"}}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Draft" {...a11yProps(0)} />
                <Tab label="Published" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Typography style={{fontSize:"14pt"}}><b>Title</b></Typography>
                <Typography color="textSecondary" style={{fontSize:"10pt"}}><b>Title</b></Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            </Container>
        </div>
    );
}