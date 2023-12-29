import React from 'react';
import type { NextPage } from 'next';
import { BlogPost } from '../../services/blog.types';
import { BlogApi } from '../../services/blog';
import { BlogDetail } from '../../components/blog/blog-detail';
import { Layout } from '../../components/layout/layout';
// import { NextSeo } from "next-seo";

type BlogDetailPageProps = {
    post: BlogPost;
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ post }) => {
    return (
        <Layout>
            {!post && <div>Loading...</div>}
            {post && <BlogDetail post={post} />}
        </Layout>
    );
};

BlogDetailPage.getInitialProps = async ctx => {
    const { slug } = ctx.query;
    const api = new BlogApi();
    const post = await api.fetchBlogBySlug(slug as string);
    return { post };
};

export default BlogDetailPage;
