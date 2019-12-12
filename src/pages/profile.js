import React,{Component} from 'react';
import Nav from '../layout/nav';
import Prof from '../components/profilbody';
import ArticleBy from '../components/articleby';




class Profile extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Prof/>
        <ArticleBy/>
      </div>
    );
  }
}
export default Profile;