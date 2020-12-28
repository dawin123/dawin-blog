import React from 'react';
import { NextPage } from 'next';
import { BlogApi } from '../../services/blog';
import { BlogPost } from '../../services/blog.types';
import BlogCard from '../../components/blog-card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface BlogPageProps {
    entries: Array<BlogPost>;
}

const chunk = (arr: Array<any>, chunkSize: number) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
};

const BlogPage: NextPage<BlogPageProps> = ({ entries }) => {
    const renderBlogList = entries =>
        entries.map((entry, i) => {
            return (
                <Col className='mb-4'>
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
        <div>
            <h1 style={{ textAlign: 'center' }}>Blog</h1>
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
    );
};

BlogPage.getInitialProps = async () => {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
};

export default BlogPage;
