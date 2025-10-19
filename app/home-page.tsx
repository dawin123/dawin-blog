'use client';

import { JobExperience, Education } from '../services/personal-detail.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop,
    faGamepad,
    faPencilAlt,
    faCamera,
    faDiceThree,
    faPlane
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faJs,
    faNodeJs,
    faBootstrap,
    faAndroid,
    faJava,
    faAws
} from '@fortawesome/free-brands-svg-icons';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Markdown from 'react-markdown';

interface HomePageProps {
    jobExperiences: Array<JobExperience>;
    educations: Array<Education>;
}

const HomePage = ({ jobExperiences, educations }: HomePageProps) => {
    const renderJobExperience = (jobExperience: JobExperience) => {
        return (
            <Row key={jobExperience.id} className='mb-5'>
                <Col xs={2}>
                    <Image
                        style={{ width: '50px' }}
                        src={jobExperience.icon && jobExperience.icon.imageUrl}
                        alt={jobExperience.icon && jobExperience.icon.title}
                    />
                </Col>
                <Col xs={10} className='personal-detail-col'>
                    <h4>{jobExperience.company}</h4>
                    <h6>{`${jobExperience.jobTitle} . ${jobExperience.employmentType}`}</h6>
                    <p>{`${jobExperience.startDate} - ${jobExperience.endDate}`}</p>
                    <p>{jobExperience.location}</p>
                    <div className='text-justify'>
                        <Markdown>{jobExperience.description}</Markdown>
                    </div>
                </Col>
            </Row>
        );
    };

    const renderEducation = (education: Education) => {
        return (
            <Row key={education.id} className='mb-5'>
                <Col xs={2}>
                    <Image
                        style={{ width: '50px' }}
                        src={education.icon && education.icon.imageUrl}
                        alt={education.icon && education.icon.title}
                    />
                </Col>
                <Col xs={10} className='personal-detail-col'>
                    <h4>{education.schoolName}</h4>
                    <h6>{education.degree}</h6>
                    <p>{`${education.startDate} - ${education.endDate}`}</p>
                    <p>{education.location}</p>
                </Col>
            </Row>
        );
    };

    return (
        <div>
            <main>
                <Image
                    src='/profile.jpeg'
                    roundedCircle
                    alt='dawin photo'
                    style={{ width: '150px' }}
                />
                <h1 className='title text-center mb-4'>
                    Welcome to{' '}
                    <span style={{ color: '#0070f3' }}>Dawin&apos;s Space</span>
                </h1>
                <h2>Dawin Widjaja</h2>
                <p className='text-center' style={{ fontSize: '1.5rem' }}>
                    Software Engineer, Mostly Frontend
                </p>
                <p>
                    <FontAwesomeIcon
                        icon={faLaptop}
                        width={24}
                        className='mr-2'
                    />
                    <FontAwesomeIcon
                        icon={faGamepad}
                        width={24}
                        className='mr-2'
                    />
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        width={24}
                        className='mr-2'
                    />
                    <FontAwesomeIcon
                        icon={faCamera}
                        width={24}
                        className='mr-2'
                    />
                    <FontAwesomeIcon
                        icon={faDiceThree}
                        width={24}
                        className='mr-2'
                    />
                    <FontAwesomeIcon
                        icon={faPlane}
                        width={24}
                        className='mr-2'
                    />
                </p>

                <div className='mt-5'>
                    <h2 className='text-center'>Work</h2>
                    <Container>
                        {jobExperiences.map(jobExperience => {
                            return renderJobExperience(jobExperience);
                        })}
                    </Container>
                </div>

                <Card>
                    <Card.Body>
                        <Card.Title>Techs</Card.Title>
                        <Card.Text>
                            <FontAwesomeIcon
                                icon={faReact}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faJs}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faNodeJs}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faBootstrap}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faAndroid}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faJava}
                                width={24}
                                className='mr-2'
                            />
                            <FontAwesomeIcon
                                icon={faAws}
                                width={24}
                                className='mr-2'
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className='mt-5'>
                    <h2 className='text-center'>Education</h2>
                    <Container>
                        {educations.map(education => {
                            return renderEducation(education);
                        })}
                    </Container>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
