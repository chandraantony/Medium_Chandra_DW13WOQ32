import React,{Component} from 'react';
import Nav from '../layout/nav';
import DetailArticle from '../components/detailarticle'
import DetailNav from '../layout/detailnav';
import Footer from '../layout/footerarticle';
import Related from '../layout/relatedarticle';
import Jambut from '../components/follow';


class Article extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <DetailNav/>
        <DetailArticle/>
        <Jambut></Jambut>
        <Related/>
        <Footer/>
     </div>      
    )
  }
}
export default Article;
