import React from 'react';
import { BLOG_TAGS } from '../../constants';
import Button from 'react-bootstrap/Button';

export const BlogFilter: React.FC = () => {
    return (
        <div>
            {Object.keys(BLOG_TAGS).map(key => {
                return (
                    <Button variant='outline-primary' key={key}>
                        {BLOG_TAGS[key]}
                    </Button>
                );
            })}
        </div>
    );
};
