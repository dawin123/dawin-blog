import { BlogPost } from '../../services/blog.types';
import { GlobalState } from '../reducers';
import type { Tags } from '../../services/tags.types';

export const blogListActionType = {
    SET_BLOG_LIST: 'SET_BLOG_LIST',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGE: 'SET_TOTAL_PAGE',
    ADD_SELECTED_TAG: 'ADD_SELECTED_TAG',
    REMOVE_SELECTED_TAG: 'REMOVE_SELECTED_TAG',
    CLEAR_SELECTED_TAG: 'CLEAR_SELECTED_TAG',
    SET_TAG_LIST: 'SET_TAG_LIST'
};

interface BlogListAction {
    type: string;
    entries?: Array<BlogPost>;
    currentPage?: number;
    totalPage?: number;
    tag?: string;
    index?: number;
    tagList: Tags;
}

export interface BlogListState {
    entries: Array<BlogPost>;
    currentPage: number;
    totalPage: number;
    selectedTags: [];
    tagList: Tags;
}

export const initialState: BlogListState = {
    entries: [],
    currentPage: 1,
    totalPage: 1,
    selectedTags: [],
    tagList: {}
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
        case blogListActionType.SET_TAG_LIST:
            return {
                ...state,
                tagList: action.tagList
            };
        default:
            return state;
    }
};

export const getBlogListState = (state: GlobalState): BlogListState =>
    state.blogList;
