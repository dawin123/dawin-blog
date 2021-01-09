import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { BlogPost } from '../../services/blog.types';
import BlogCard from '../../components/blog/blog-card';
import { Layout } from '../../components/layout/layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getBlogListState } from '../../redux/ducks/blog-list';
import { fetchBlogList } from '../../redux/thunks/fetch-blog-list';
import { wrapper } from '../../redux/store';

const chunk = (arr: Array<any>, chunkSize: number) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
};

const BlogPage: NextPage = ({}) => {
    const { entries, count } = useSelector(getBlogListState);
    const dispatch = useDispatch();
    const renderBlogList = entries =>
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
                        author={entry.author.name}
                        description={entry.description}
                        tags={entry.tags}
                        publishedDate={entry.publishedDate}
                    />
                </Col>
            );
        });

    const entriesCopy = JSON.parse(JSON.stringify(entries));
    const rows = chunk(entries.concat(entriesCopy), 3);

    return (
        <Layout>
            <div>
                <h1 className='text-center'>Blog</h1>
                <Container>
                    {rows.length > 0 &&
                        rows.map((row, id) => {
                            return (
                                <Row key={id} md={3} xs={1}>
                                    {row.length > 0 && renderBlogList(row)}
                                </Row>
                            );
                        })}
                </Container>
            </div>
        </Layout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    await store.dispatch(fetchBlogList());
});

export default BlogPage;
