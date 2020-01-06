import { SHOW_ARTICLE,SHOW_POPULAR } from './types';
import axios from 'axios';


export const fetchArticles = () => {
  
    return{
        type : SHOW_ARTICLE,
        payload : axios.get('http://localhost:5000/api/v1/articles/')
    }
    
}


export const fetchPopular = () => {
  
    return{
        type : SHOW_POPULAR,
        payload : axios.get('http://localhost:5000/api/v1/articles/popular')
    }
    
}


export const fetchArticlePerson = (id) => {
  
    return{
        type : SHOW_POPULAR,
        payload : axios.get(`http://localhost:5000/api/v1/articles/byPerson/${id}`)
    }
    
}
