import React,{Component} from 'react';
import Nav from '../layout/Nav';
import ListStory from '../components/liststory';

class Story extends Component{
    
    render(){
        return(
            <div>
            <Nav/>
            <ListStory/>
          </div>
        );
    }
}

export default Story;