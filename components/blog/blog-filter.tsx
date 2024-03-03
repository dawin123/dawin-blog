'use client';

import React, { type FC } from 'react';
import Button from 'react-bootstrap/Button';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import type { Tags } from '../../services/tags.types';

interface Props {
    selectedTags: string[];
    tagList: Tags;
}

export const BlogFilter: FC<Props> = ({ selectedTags, tagList }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push, refresh } = useRouter();

    const isTagSelected = (tag: string) => {
        const tagIndex = selectedTags.indexOf(tag);
        if (tagIndex > -1) {
            return true;
        }
        return false;
    };

    const handleFilterToggle = (tag: string) => () => {
        const tagIndex = selectedTags.indexOf(tag);
        let newSelectedTagList = selectedTags;

        if (tagIndex > -1) {
            newSelectedTagList = newSelectedTagList.filter((_, i) => i !== tagIndex);
        } else {
            newSelectedTagList.push(tag);
        }

        const params = new URLSearchParams(searchParams ?? '');
        if (newSelectedTagList.length) {
            params.set('selectedTags', newSelectedTagList.join(','));
        } else {
            params.delete('selectedTags');
        }
        push(`${pathname}?${params.toString()}`);
        refresh();
    };

    const handleClearFilter = () => {
        const params = new URLSearchParams(searchParams ?? '');
        params.delete('selectedTags');
        push(`${pathname}?${params.toString()}`);
        refresh();
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
