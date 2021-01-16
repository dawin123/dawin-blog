import React from 'react';
import { BLOG_TAGS } from '../../constants';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
    addSelectedTag,
    removeSelectedTag,
    clearSelectedTag,
    fetchBlogList
} from '../../redux/blog-list/actions';
import { getBlogListState } from '../../redux/blog-list/reducer';

export const BlogFilter: React.FC = () => {
    const dispatch = useDispatch();
    const { selectedTags } = useSelector(getBlogListState);

    const isTagSelected = (tag: string) => {
        const tagIndex = selectedTags.indexOf(tag);
        if (tagIndex > -1) {
            return true;
        }
        return false;
    };

    const handleFilterToggle = (tag: string) => () => {
        const tagIndex = selectedTags.indexOf(tag);
        if (tagIndex > -1) {
            dispatch(removeSelectedTag(tagIndex));
        } else {
            dispatch(addSelectedTag(tag));
        }
        dispatch(fetchBlogList());
    };

    const handleClearFilter = () => {
        dispatch(clearSelectedTag());
        dispatch(fetchBlogList());
    };

    return (
        <div className='blog-filter'>
            {Object.keys(BLOG_TAGS).map(key => {
                return (
                    <Button
                        variant={
                            isTagSelected(BLOG_TAGS[key])
                                ? 'primary'
                                : 'outline-primary'
                        }
                        key={key}
                        className='filter-button'
                        onClick={handleFilterToggle(BLOG_TAGS[key])}
                    >
                        {BLOG_TAGS[key]}
                    </Button>
                );
            })}
            {selectedTags.length > 0 && (
                <Button variant='secondary' onClick={handleClearFilter}>
                    Clear Filter
                </Button>
            )}
        </div>
    );
};
