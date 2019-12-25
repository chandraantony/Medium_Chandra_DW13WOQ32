import React,{Component} from 'react';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import CategoryBody from '../components/CategoryBody';



class Kategori extends Component{
  constructor(){
    super();
    this.state= {
     
    }
  }
  render(){
    const {id} = this.props.match.params;
     return(
      <div>  
        <Nav/>
        <CategoryBody jambuid = {id}/>
        <Footer/>
      </div>
    );
  }
}
export default Kategori;