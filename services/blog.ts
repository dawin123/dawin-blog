import { createClient } from 'contentful';
import type { ContentfulClientApi } from 'contentful';
import type { Author, HeroImage, BlogPost } from './blog.types';
import moment from 'moment';
import { ENTRY_PER_PAGE } from '../constants';

export class BlogApi {
    client: ContentfulClientApi<undefined>;

    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID ?? '',
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
        });
    }

    async fetchBlogEntries(
        selectedTags: Array<string>,
        currentPage: number
    ): Promise<Record<string, any>> {
        let request: Record<string, any> = {
            content_type: 'blogPost', // only fetch blog post entry
            limit: ENTRY_PER_PAGE,
            skip: currentPage - 1
        };

        if (selectedTags.length > 0) {
            request = {
                ...request,
                'metadata.tags.sys.id[in]': selectedTags.toString()
            };
        }

        return await this.client.getEntries(request).then(entries => {
            let blogPosts: BlogPost[] = [];
            let totalPageNo = 1;
            if (entries && entries.items && entries.items.length > 0) {
                blogPosts = entries.items.map(entry => this.convertPost(entry));
            }
            if (entries && entries.total) {
                totalPageNo = Math.ceil(entries.total / ENTRY_PER_PAGE);
            }
            return {
                entries: blogPosts,
                totalPageNo: totalPageNo
            };
        });
    }

    async fetchBlogById(id: string): Promise<BlogPost | null> {
        return await this.client.getEntry(id).then(entry => {
            if (entry) {
                const post = this.convertPost(entry);
                return post;
            }
            return null;
        });
    }

    async fetchBlogBySlug(slug: string): Promise<BlogPost> {
        return await this.client
            .getEntries({
                content_type: 'blogPost',
                'fields.slug[in]': slug
            })
            .then(entries => {
                const post = this.convertPost(entries.items[0]);
                return post;
            });
    }

    convertImage = (rawImage): HeroImage | undefined => {
        if (rawImage) {
            return {
                imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well here
                description: rawImage.description || null,
                title: rawImage.title
            };
        }
        return undefined;
    };

    convertAuthor = (rawAuthor): Author | undefined => {
        if (rawAuthor) {
            return {
                name: rawAuthor.name,
                phone: rawAuthor.phone,
                shortBio: rawAuthor.shortBio,
                title: rawAuthor.title,
                email: rawAuthor.email,
                company: rawAuthor.company,
                twitter: rawAuthor.twitter,
                facebook: rawAuthor.facebook,
                github: rawAuthor.github
            };
        }
        return undefined;
    };

    convertPost = (rawData): BlogPost => {
        const rawPost = rawData.fields;
        const rawHeroImage = rawPost.heroImage
            ? rawPost.heroImage.fields
            : null;
        const rawAuthor = rawPost.author ? rawPost.author.fields : null;
        return {
            id: rawData.sys.id,
            body: rawPost.body,
            description: rawPost.description,
            publishedDate: moment(rawPost.publishDate).format('DD MMM YYYY'),
            slug: rawPost.slug,
            tags: rawData.metadata.tags.map(tag => tag.sys.id),
            title: rawPost.title,
            heroImage: this.convertImage(rawHeroImage),
            author: this.convertAuthor(rawAuthor)
        };
    };
}
