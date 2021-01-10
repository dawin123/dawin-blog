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

export const fetchBlogList = () => {
    return (dispatch, getState) => {
        const api = new BlogApi();
        return api.fetchBlogEntries().then(result => {
            dispatch(setBlogList(result.entries));
            dispatch(setTotalPage(result.totalPageNo));
        });
    };
};
