import React,{Component} from 'react';
import Nav from './layout/nav';
import Container from './layout/body';
import Container1 from './layout/body1';
import Nav1 from './layout/nav1';

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
