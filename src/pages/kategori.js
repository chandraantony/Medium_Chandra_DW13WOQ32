import React,{Component} from 'react';
import Nav from '../layout/nav';
import Nav1 from '../layout/nav1';
import Onzero from '../components/onzero';
import Footer from '../layout/footer';


class Kategori extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Onzero/>
        <Footer/>
      </div>
      
    );
  }
}
export default Kategori;