'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import { Tags } from '../../services/tags.types';

interface Props {
    id: string;
    description: string;
    publishedDate: string;
    slug: string;
    tags: Array<string>;
    title: string;
    imageUrl?: string;
    author: string;
    tagList: Tags;
}

const BlogCard: React.FC<Props> = ({
    id,
    description,
    publishedDate,
    slug,
    tags,
    title,
    imageUrl,
    author,
    tagList
}) => {
    return (
        <Link href='/blog/[slug]' as={`/blog/${slug}`}>
            <Card data-testid={`blog-card-${id}`} className='blog-card'>
                <Card.Img variant='top' src={imageUrl ? imageUrl : ''} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted h6 small'>
                        <p>{publishedDate}</p>
                    </Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    {tags.map(tag => {
                        return (
                            <Badge pill key={tag} className='pill'>
                                {tagList[tag]}
                            </Badge>
                        );
                    })}
                </Card.Body>
            </Card>
        </Link>
    );
};

export default BlogCard;
