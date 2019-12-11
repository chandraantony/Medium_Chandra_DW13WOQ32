import React,{Component} from 'react';
import Nav from '../layout/nav';
import DetailArticle from '../components/detailarticle'
import DetailNav from '../layout/detailnav';


class Article extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <DetailNav/>
        <DetailArticle/>
      </div>
      
    );
  }
}
export default Article;
