import React,{Component} from 'react';

import ArticleList from '../components/ArticleList';
import ProfileBar from '../components/ProfileBar';
import Nav from '../layout/Nav';
import  {connect} from 'react-redux'

class Profile extends Component{
  render(){
    return(
      <div>  
        <Nav/>
        <ProfileBar/>
        <ArticleList/>
      </div>
    );
  }
}
export default connect()(Profile);