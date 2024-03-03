import React from 'react';
import { BlogApi } from '../../../services/blog';
import { BlogDetail } from '../../../components/blog/blog-detail';
import { TagsApi } from '../../../services/tags';
// import { NextSeo } from "next-seo";

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
    const api = new BlogApi();
    const post = await api
        .fetchBlogBySlug(params.slug as string)
        .catch(error => {
            console.error(error);
            return undefined;
        });
    const tagAPI = new TagsApi();
    const tags = await tagAPI.fetchTags();

    return (
        <>
            {!post && <div>Loading...</div>}
            {post && <BlogDetail post={post} tagList={tags} />}
        </>
    );
};

export default BlogDetailPage;
