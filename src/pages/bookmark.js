import React,{Component} from 'react';
import Nav from '../layout/nav';
import Bookmarkbody from '../components/bookmarkbody';




class Bookmark extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Bookmarkbody></Bookmarkbody>
      </div>
    );
  }
}
export default Bookmark;