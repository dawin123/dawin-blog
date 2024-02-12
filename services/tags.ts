import { createClient } from 'contentful';
import type { ContentfulClientApi } from 'contentful';
import type { Tags } from './tags.types';

export class TagsApi {
    client: ContentfulClientApi<undefined>;

    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID ?? '',
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
        });
    }

    async fetchTags(): Promise<Tags> {
        return await this.client
            .getTags()
            .then(tags => {
                if (tags) {
                    return tags.items.reduce((acc, tag) => {
                        return {
                            ...acc,
                            [tag.sys.id]: tag.name
                        };
                    }, {});
                }

                return {};
            })
            .catch(err => {
                console.error(err);
                return {};
            });
    }
}
