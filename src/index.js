import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kategori from './_pages/kategori';
import Article from './_pages/article';
import Comment from './_pages/comment';
import Profile from './_pages/profile';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch, Route,} from 'react-router-dom';
import Addstory from './_pages/addstory';
import Story from './_pages/story';
import Bookmark from './_pages/bookmark';
import Stat from './_pages/stat';
import Home from './_pages/home';
import { Provider } from "react-redux";
import store from './store';



ReactDOM.render( //<App/>  , document.getElementById('root'));
            <Provider store={store}>
               <Router>
                    <Switch>
                        <Route exact path='/' component={App} ></Route>
                        <Route path='/home' component={Home} ></Route>
                        <Route path='/kategori/:id/article' component={Kategori} ></Route>
                        <Route path='/article/:id' component={Article}></Route>
                        <Route path='/comment' component={Comment}></Route>
                        <Route path='/profile' component={Profile}></Route>
                        <Route path='/addStory' component ={Addstory}></Route>
                        <Route path='/story' component={Story}></Route>
                        <Route path='/bookmark' component={Bookmark}></Route>
                        <Route path="/stat" component={Stat}></Route>
                    </Switch>
                </Router>        
            </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
