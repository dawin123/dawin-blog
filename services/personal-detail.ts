import { createClient } from 'contentful';
import type { ContentfulClientApi } from 'contentful';
import type {
    JobExperience,
    PersonalDetailIcon,
    Education
} from './personal-detail.types';
import moment from 'moment';

export class PersonalDetailApi {
    client: ContentfulClientApi<undefined>;

    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID ?? '',
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
        });
    }

    async fetchJobExperiences(): Promise<Array<JobExperience>> {
        return await this.client
            .getEntries({
                content_type: 'jobExperience',
                order: ['-fields.startDate']
            })
            .then(entries => {
                if (entries && entries.items && entries.items.length > 0) {
                    const jobExperiences = entries.items.map(entry =>
                        this.convertJob(entry)
                    );
                    return jobExperiences;
                }
                return [];
            });
    }

    async fetchEducation(): Promise<Array<Education>> {
        return await this.client
            .getEntries({
                content_type: 'education',
                order: ['-fields.startDate']
            })
            .then(entries => {
                if (entries && entries.items && entries.items.length > 0) {
                    const education = entries.items.map(entry =>
                        this.convertEducation(entry)
                    );
                    return education;
                }
                return [];
            });
    }

    convertImage = (rawImage): PersonalDetailIcon | undefined => {
        if (rawImage) {
            return {
                imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well here
                title: rawImage.title
            };
        }
        return undefined;
    };

    convertJob = (rawData): JobExperience => {
        const rawJob = rawData.fields;
        const rawIcon = rawJob.icon ? rawJob.icon.fields : null;
        return {
            id: rawData.sys.id,
            jobTitle: rawJob.jobTitle,
            company: rawJob.company,
            description: rawJob.description ? rawJob.description : '',
            startDate: moment(rawJob.startDate).format('MMM YYYY'),
            endDate: rawJob.endDate
                ? moment(rawJob.endDate).format('MMM YYYY')
                : 'current',
            employmentType: rawJob.employmentType,
            location: rawJob.location,
            icon: this.convertImage(rawIcon)
        };
    };

    convertEducation = (rawData): Education => {
        const rawEducation = rawData.fields;
        const rawIcon = rawEducation.icon ? rawEducation.icon.fields : null;
        return {
            id: rawData.sys.id,
            schoolName: rawEducation.schoolName,
            degree: rawEducation.degree,
            startDate: moment(rawEducation.startDate).format('MMM YYYY'),
            endDate: rawEducation.endDate
                ? moment(rawEducation.endDate).format('MMM YYYY')
                : 'current',
            location: rawEducation.location,
            icon: this.convertImage(rawIcon)
        };
    };
}
