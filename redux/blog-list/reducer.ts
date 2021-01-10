import { BlogPost } from '../../services/blog.types';
import { GlobalState } from '../reducers';

export const blogListActionType = {
    SET_BLOG_LIST: 'SET_BLOG_LIST',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGE: 'SET_TOTAL_PAGE'
};

interface BlogListAction {
    type: string;
    entries?: Array<BlogPost>;
    currentPage?: number;
    totalPage?: number;
}

export interface BlogListState {
    entries: Array<BlogPost>;
    currentPage: number;
    totalPage: number;
}

export const initialState: BlogListState = {
    entries: [],
    currentPage: 1,
    totalPage: 1
};

export const blogListReducer = (
    state: BlogListState = initialState,
    action: BlogListAction
) => {
    switch (action.type) {
        case blogListActionType.SET_BLOG_LIST:
            return {
                ...state,
                entries: action.entries
            };
        case blogListActionType.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case blogListActionType.SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.totalPage
            };
        default:
            return state;
    }
};

export const getBlogListState = (state: GlobalState) => state.blogList;
