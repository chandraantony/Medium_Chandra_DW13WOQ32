import React,{Component} from 'react';
import Nav from '../layout/Nav';
import Status from '../components/statbody';


class Stat extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Status/>
      </div>
      
    );
  }
}
export default Stat;