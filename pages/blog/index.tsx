import React from 'react';
import { useSelector } from 'react-redux';
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type { BlogPost } from '../../services/blog.types';
import BlogCard from '../../components/blog/blog-card';
import { Layout } from '../../components/layout/layout';
import { BlogPagination } from '../../components/blog/blog-pagination';
import { BlogFilter } from '../../components/blog/blog-filter';
import { getBlogListState } from '../../redux/blog-list/reducer';
import { fetchBlogList, fetchBlogTags } from '../../redux/blog-list/actions';
import { wrapper } from '../../redux/store';

const chunk = (
    arr: Array<BlogPost>,
    chunkSize: number
): Array<Array<BlogPost>> => {
    const R: Array<Array<BlogPost>> = [];
    for (let i = 0; i < arr.length; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
};

const BlogPage: NextPage = () => {
    const { entries } = useSelector(getBlogListState);
    const renderBlogList = (entries: Array<BlogPost>) =>
        entries.map((entry, i) => {
            return (
                <Col className='mb-4' key={`col-${i}`}>
                    <BlogCard
                        key={i}
                        id={entry.id}
                        slug={entry.slug}
                        imageUrl={
                            entry.heroImage ? entry.heroImage.imageUrl : ''
                        }
                        title={entry.title}
                        author={entry.author?.name ?? ''}
                        description={entry.description}
                        tags={entry.tags}
                        publishedDate={entry.publishedDate}
                    />
                </Col>
            );
        });

    const rows = chunk(entries, 3);

    return (
        <Layout>
            <Container>
                <h1 className='text-center'>Blog</h1>
                <BlogFilter />
                {rows.length > 0 &&
                    rows.map((row, id) => {
                        return (
                            <Row key={id} md={3} xs={1}>
                                {row.length > 0 && renderBlogList(row)}
                            </Row>
                        );
                    })}
                <BlogPagination />
            </Container>
        </Layout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    await store.dispatch(fetchBlogList());
    await store.dispatch(fetchBlogTags());
});

export default BlogPage;
