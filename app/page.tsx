import { PersonalDetailApi } from '../services/personal-detail';
import HomePage from './home-page';

const Page = async () => {
    const api = new PersonalDetailApi();
    const jobExperiences = await api.fetchJobExperiences();
    const educations = await api.fetchEducation();

    return <HomePage jobExperiences={jobExperiences} educations={educations} />;
};

export default Page;
