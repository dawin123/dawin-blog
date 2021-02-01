import React from 'react';
import { BlogPost } from '../../services/blog.types';
import ReactMarkdown from 'react-markdown';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

type BlogDetailProps = {
    post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
    const { post } = props;
    const mainTag = post.tags.length > 0 ? post.tags[0] : '';
    return (
        <div>
            <Container>
                <h1 className='text-center mt-5'>{post.title}</h1>
                <h6 className='text-center mb-4'>{`${post.publishedDate} / ${mainTag}`}</h6>
            </Container>
            <div className='hero-image-container'>
                <Image
                    className='hero-image'
                    src={post.heroImage.imageUrl}
                    alt={post.heroImage.title}
                    fluid
                />
            </div>
            <Container className='body-container'>
                <section className='p-4 bg-white'>
                    <ReactMarkdown source={post.body} />
                </section>
            </Container>
        </div>
    );
};
