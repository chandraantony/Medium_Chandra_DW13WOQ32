import React,{Component} from 'react';
import Nav from '../layout/Nav';
import CommentView from '../components/CommentView';



class Comment extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <CommentView/>
      </div>
      
    );
  }
}
export default Comment;