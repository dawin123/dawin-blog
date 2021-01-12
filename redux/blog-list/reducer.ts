import { BlogPost } from '../../services/blog.types';
import { GlobalState } from '../reducers';

export const blogListActionType = {
    SET_BLOG_LIST: 'SET_BLOG_LIST',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGE: 'SET_TOTAL_PAGE',
    ADD_SELECTED_TAG: 'ADD_SELECTED_TAG',
    REMOVE_SELECTED_TAG: 'REMOVE_SELECTED_TAG',
    CLEAR_SELECTED_TAG: 'CLEAR_SELECTED_TAG'
};

interface BlogListAction {
    type: string;
    entries?: Array<BlogPost>;
    currentPage?: number;
    totalPage?: number;
    tag?: string;
    index?: number;
}

export interface BlogListState {
    entries: Array<BlogPost>;
    currentPage: number;
    totalPage: number;
    selectedTags: [];
}

export const initialState: BlogListState = {
    entries: [],
    currentPage: 1,
    totalPage: 1,
    selectedTags: []
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
        case blogListActionType.ADD_SELECTED_TAG:
            return {
                ...state,
                selectedTags: [...state.selectedTags, action.tag]
            };
        case blogListActionType.REMOVE_SELECTED_TAG:
            return {
                ...state,
                selectedTags: [
                    ...state.selectedTags.slice(0, action.index),
                    ...state.selectedTags.slice(action.index + 1)
                ]
            };
        case blogListActionType.CLEAR_SELECTED_TAG:
            return {
                ...state,
                selectedTags: []
            };
        default:
            return state;
    }
};

export const getBlogListState = (state: GlobalState) => state.blogList;
