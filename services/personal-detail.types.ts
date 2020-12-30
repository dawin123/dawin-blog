export type PersonalDetailIcon = {
    imageUrl: string;
    title: string;
};

export type JobExperience = {
    id: string;
    icon: PersonalDetailIcon;
    jobTitle: string;
    company: string;
    employmentType: string;
    location: string;
    description: string;
    startDate: string;
    endDate: string;
};

export type Education = {
    id: string;
    icon: PersonalDetailIcon;
    schoolName: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
};
