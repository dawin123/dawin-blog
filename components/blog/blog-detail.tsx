import React, { type FC } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown';
import type { BlogPost } from '../../services/blog.types';
import type { Tags } from '../../services/tags.types';

interface Props {
    post: BlogPost;
    tagList: Tags;
};

export const BlogDetail: FC<Props> = ({ post, tagList}) => {
    const mainTag = post.tags.length > 0 ? tagList[post.tags[0]] : '';

    return (
        <div>
            <Container>
                <h1 className='text-center mt-5'>{post.title}</h1>
                <h6 className='text-center mb-4'>{`${post.publishedDate} / ${mainTag}`}</h6>
            </Container>
            <div className='hero-image-container'>
                <Image
                    className='hero-image'
                    src={post.heroImage?.imageUrl}
                    alt={post.heroImage?.title}
                    fluid
                />
            </div>
            <Container className='body-container'>
                <section className='p-4 bg-white'>
                    <Markdown>{post.body}</Markdown>
                </section>
            </Container>
        </div>
    );
};
