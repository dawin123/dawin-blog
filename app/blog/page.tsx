import React from 'react';
import { BlogApi } from '../../services/blog';
import { TagsApi } from '../../services/tags';
import { BlogPost } from '../../services/blog.types';
import { Col, Container, Row } from 'react-bootstrap';
import { BlogCard } from '../../components/blog/blog-card';
import { BlogPagination } from '../../components/blog/blog-pagination';
import { BlogFilter } from '../../components/blog/blog-filter';

const chunk = (
    arr: Array<BlogPost>,
    chunkSize: number
): Array<Array<BlogPost>> => {
    const R: Array<Array<BlogPost>> = [];
    for (let i = 0; i < arr.length; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
};

const BlogPage = async ({
    searchParams
}: {
    searchParams?: {
        selectedTags?: string;
        page?: string;
    };
}) => {
    const selectedTags = searchParams?.selectedTags
        ? searchParams.selectedTags.split(',')
        : [];
    const currentPage = Number(searchParams?.page) || 1;

    const blogAPI = new BlogApi();
    const tagAPI = new TagsApi();
    const { entries, totalPageNo } = await blogAPI.fetchBlogEntries(
        selectedTags,
        currentPage
    );
    const tags = await tagAPI.fetchTags();

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
                        tagList={tags}
                    />
                </Col>
            );
        });

    const rows = chunk(entries, 3);

    return (
        <Container>
            <h1 className='text-center'>Blog</h1>
            <BlogFilter selectedTags={selectedTags} tagList={tags} />
            {rows.length > 0 &&
                rows.map((row, id) => {
                    return (
                        <Row key={id} md={3} xs={1}>
                            {row.length > 0 && renderBlogList(row)}
                        </Row>
                    );
                })}
            <BlogPagination currentPage={currentPage} totalPage={totalPageNo} />
        </Container>
    );
};

export default BlogPage;
