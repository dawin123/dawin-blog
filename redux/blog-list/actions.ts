import { BlogApi } from '../../services/blog';
import { TagsApi } from '../../services/tags';
import { BlogPost } from '../../services/blog.types';
import { blogListActionType } from './reducer';
import type { Tags } from '../../services/tags.types';

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

export const setTagList = (tagList: Tags) => ({
    type: blogListActionType.SET_TAG_LIST,
    tagList
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

export const fetchBlogTags = () => {
    return dispatch => {
        const api = new TagsApi();
        return api.fetchTags().then(tags => {
            dispatch(setTagList(tags));
        });
    };
};
