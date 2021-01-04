import { combineReducers } from 'redux';
import { blogListReducer } from './ducks/blog-list';

export const reducers = combineReducers({
    blogList: blogListReducer
});
