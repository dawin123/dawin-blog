import React from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
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
    return (
        <Link href='/blog/[slug]' as={`/blog/${slug}`} passHref>
            <Card data-testid={`blog-card-${id}`}>
                <Card.Img variant='top' src={imageUrl ? imageUrl : ''} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted h6 small'>
                        <p>{publishedDate}</p>
                    </Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default BlogCard;
