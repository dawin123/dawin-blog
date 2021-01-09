import { BlogApi } from '../../services/blog';
import { blogListActionType } from '../ducks/blog-list';

export const fetchBlogList = () => {
    return (dispatch, getState) => {
        const api = new BlogApi();
        return api.fetchBlogEntries().then(result => {
            dispatch({
                type: blogListActionType.SET_BLOG_LIST,
                entries: result.entries
            });
            dispatch({
                type: blogListActionType.SET_TOTAL_PAGE,
                totalPage: result.totalPageNo
            });
        });
    };
};
