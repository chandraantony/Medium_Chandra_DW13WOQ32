import React,{Component} from 'react';
import Register from './components/register';
import Nav from './layout/nav';
import Container from './layout/body';
import Container1 from './layout/body1';
import Nav1 from './layout/nav1';
import { Button } from '@material-ui/core';
import Onzero from './components/onzero';
import Footer from './layout/footer';
import DetailArticle from './components/detailarticle'
import DetailNav from './layout/detailnav';
import Test from './layout/test';

class App extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Nav1/>
        <Container></Container>
        <Container1></Container1>
      </div>
      
    );
  }
}
export default App;
