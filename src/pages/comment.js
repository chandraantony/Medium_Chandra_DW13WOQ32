import React,{Component} from 'react';
import Nav from '../layout/nav';
import Combox from '../components/commentbody';


class Comment extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Combox/>
      </div>
      
    );
  }
}
export default Comment;