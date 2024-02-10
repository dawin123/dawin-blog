import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import { getBlogListState } from '../../redux/blog-list/reducer';
import { useSelector } from 'react-redux';

interface Props {
    id: string;
    description: string;
    publishedDate: string;
    slug: string;
    tags: Array<string>;
    title: string;
    imageUrl?: string;
    author: string;
}

const BlogCard: React.FC<Props> = ({
    id,
    description,
    publishedDate,
    slug,
    tags,
    title,
    imageUrl,
    author
}) => {
    const { tagList } = useSelector(getBlogListState);

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
