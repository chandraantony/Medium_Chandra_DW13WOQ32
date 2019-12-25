import React,{Component} from 'react';
import Nav from '../layout/Nav';
import Footer from '../layout/FooterArticle';
import RelatedArticle from '../layout/RelatedArticle';
import FollowMe from '../components/FollowMe';
import NavArticle from '../layout/NavArticle';
import ArticleBody from '../components/ArticleBody';

class Article extends Component{
  render(){
    const {id} = this.props.match.params;
    return(
      <div>
        <Nav/>
        <NavArticle/>
        <ArticleBody  articleId = {id}/>
        <FollowMe/>
        <RelatedArticle/>
        <Footer/>
     </div>      
    )
  }
}
export default Article;
