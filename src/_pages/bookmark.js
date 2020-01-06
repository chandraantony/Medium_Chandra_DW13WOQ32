import React,{Component} from 'react';
import Nav from '../layout/Nav';
import BookmarkBody from '../components/Bookmark';




class Bookmark extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <BookmarkBody/>
      </div>
    );
  }
}
export default Bookmark;