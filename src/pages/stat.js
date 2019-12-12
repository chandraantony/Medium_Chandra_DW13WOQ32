import React,{Component} from 'react';
import Nav from '../layout/nav';
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