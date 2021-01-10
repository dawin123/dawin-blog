import { combineReducers } from 'redux';
import { blogListReducer, BlogListState } from './blog-list/reducer';
export interface GlobalState {
    blogList: BlogListState;
}

export const reducers = combineReducers({
    blogList: blogListReducer
});
