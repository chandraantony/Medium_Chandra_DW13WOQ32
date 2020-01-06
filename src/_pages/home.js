import React,{Component} from 'react';
import Nav from '../layout/Nav';
import NavKategori from '../layout/Navkategori';
import BodyHome from '../components/BodyHome';
import BodyHome1 from '../components/BodyHome1';

class Home extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <NavKategori/>
        <BodyHome/>
        <BodyHome1/>
      </div>
      
    );
  }
}
export default Home;
