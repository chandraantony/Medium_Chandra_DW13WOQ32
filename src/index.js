import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kategori from './pages/kategori';
import Article from './pages/article';
import Comment from './pages/comment';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch, Route,} from 'react-router-dom';


ReactDOM.render(
                <Router>
                    <Switch>
                        <Route exact path='/' component={App} ></Route>
                        <Route path='/Kategori' component={Kategori} ></Route>
                        <Route path='/Article' component={Article}></Route>
                        <Route path='/Comment' component={Comment}></Route>
                    </Switch>
                </Router>            
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
