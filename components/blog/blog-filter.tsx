import React from 'react';
import { BLOG_TAGS } from '../../constants';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
    addSelectedTag,
    removeSelectedTag,
    clearSelectedTag,
    fetchBlogList,
    setCurrentPage
} from '../../redux/blog-list/actions';
import { getBlogListState } from '../../redux/blog-list/reducer';

export const BlogFilter: React.FC = () => {
    const dispatch = useDispatch();
    const { selectedTags, tagList } = useSelector(getBlogListState);

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
        dispatch(setCurrentPage(1));
        dispatch(fetchBlogList());
    };

    const handleClearFilter = () => {
        dispatch(clearSelectedTag());
        dispatch(setCurrentPage(1));
        dispatch(fetchBlogList());
    };

    return (
        <div className='blog-filter'>
            {Object.keys(tagList).map(tag => {
                return (
                    <Button
                        variant={
                            isTagSelected(tag) ? 'primary' : 'outline-primary'
                        }
                        key={tag}
                        className='filter-button'
                        onClick={handleFilterToggle(tag)}
                    >
                        {tagList[tag]}
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
