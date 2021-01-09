import { BlogApi } from '../../services/blog';
import { blogListActionType } from '../ducks/blog-list';

export const fetchBlogList = () => {
    return (dispatch, getState) => {
        const api = new BlogApi();
        return api.fetchBlogEntries().then(entries => {
            dispatch({
                type: blogListActionType.SET_BLOG_LIST,
                entries: entries
            });
        });
    };
};
