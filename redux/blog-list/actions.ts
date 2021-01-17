import { BlogApi } from '../../services/blog';
import { BlogPost } from '../../services/blog.types';
import { blogListActionType } from './reducer';

export const setBlogList = (entries: Array<BlogPost>) => ({
    type: blogListActionType.SET_BLOG_LIST,
    entries: entries
});

export const setTotalPage = (totalPage: number) => ({
    type: blogListActionType.SET_TOTAL_PAGE,
    totalPage: totalPage
});

export const setCurrentPage = (currentPage: number) => ({
    type: blogListActionType.SET_CURRENT_PAGE,
    currentPage: currentPage
});

export const addSelectedTag = (tag: string) => ({
    type: blogListActionType.ADD_SELECTED_TAG,
    tag: tag
});

export const removeSelectedTag = (index: number) => ({
    type: blogListActionType.REMOVE_SELECTED_TAG,
    index: index
});

export const clearSelectedTag = () => ({
    type: blogListActionType.CLEAR_SELECTED_TAG
});

export const fetchBlogList = () => {
    return (dispatch, getState) => {
        const api = new BlogApi();
        const state = getState();
        const { selectedTags, currentPage } = state.blogList;
        return api.fetchBlogEntries(selectedTags, currentPage).then(result => {
            dispatch(setBlogList(result.entries));
            dispatch(setTotalPage(result.totalPageNo));
        });
    };
};
