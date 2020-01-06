import {combineReducers} from 'redux';
import articleReducer from './articleReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    articleReducer,
    categoryReducer
});