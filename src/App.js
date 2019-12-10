import React,{Component} from 'react';
import Register from './components/register';
import Nav from './layout/nav';
import Container from './layout/body';
import Container1 from './layout/body1';
import Nav1 from './layout/nav1';
import { Button } from '@material-ui/core';
import Onzero from './components/onzero';
import Footer from './layout/footer';

class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <Nav1></Nav1>
        <Onzero></Onzero>
        <Footer></Footer>
      </div>
      
    );
  }
}
export default App;
