import React,{Component} from 'react';
import Nav from '../layout/nav';
import DetailArticle from '../components/detailarticle'
import DetailNav from '../layout/detailnav';
import Footer from '../layout/footerarticle'
import Related from '../layout/relatedarticle'


class Article extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <DetailNav/>
        <DetailArticle/>
        <Related/>
        <Footer/>
       
      </div>      
    )
  }
}
export default Article;
