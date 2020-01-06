import React, {Component} from 'react';
import Nav from '../layout/Nav';
import AddStoryBody from '../components/AddStoryBody';
import Auth from '../auth/authorize';
class Addstory extends Component{
  componentDidMount(){
    Auth(localStorage.getItem('Secret-Code'));
}
  render(){
    return(
      <div>
        <Nav/>
        <AddStoryBody/>
      </div>
    );
  }
}
export default Addstory;




