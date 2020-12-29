import React from 'react';
import { BlogDetail } from '../../components/blog-detail';
import { BlogPost } from '../../services/blog.types';
import { BlogApi } from '../../services/blog';
// import { NextSeo } from "next-seo";
import 'bootstrap/dist/css/bootstrap.min.css';

type BlogDetailPageProps = {
    post: BlogPost;
};

export default class BlogDetailPage extends React.Component<BlogDetailPageProps> {
    static async getInitialProps(ctx) {
        const { slug } = ctx.query;
        console.log('slug: ' + slug);
        const api = new BlogApi();
        const post = await api.fetchBlogBySlug(slug);
        return { post };
    }

    render() {
        const { post } = this.props;
        return (
            <div className='row'>
                <div className='col-12'>
                    {!post && <div>Loading...</div>}
                    {post && <BlogDetail post={post} />}
                </div>
            </div>
        );
    }
}
