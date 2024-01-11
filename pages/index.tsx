import Head from 'next/head';
import { NextPage } from 'next';
import { PersonalDetailApi } from '../services/personal-detail';
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
import { Layout } from '../components/layout/layout';
import ReactMarkdown from 'react-markdown';

interface HomePageProps {
    jobExperiences: Array<JobExperience>;
    educations: Array<Education>;
}

const Home: NextPage<HomePageProps> = ({ jobExperiences, educations }) => {
    const renderJobExperience = (jobExperience: JobExperience) => {
        return (
            <Row key={jobExperience.id} className='mb-5'>
                <Col xs={1}>
                    <Image
                        style={{ width: '50px' }}
                        src={jobExperience.icon && jobExperience.icon.imageUrl}
                        alt={jobExperience.icon && jobExperience.icon.title}
                    />
                </Col>
                <Col xs={11} className='personal-detail-col'>
                    <h4>{jobExperience.company}</h4>
                    <h6>{`${jobExperience.jobTitle} . ${jobExperience.employmentType}`}</h6>
                    <p>{`${jobExperience.startDate} - ${jobExperience.endDate}`}</p>
                    <p>{jobExperience.location}</p>
                    <p className='text-justify'>
                        <ReactMarkdown source={jobExperience.description} />
                    </p>
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
        <Layout>
            <div>
                <main>
                    <Image
                        src='https://lh3.googleusercontent.com/yBZERrimxhPreSizMEX_Ma-aS1xVlNf250NvBRFD95PlVh7wY_jAmaz2sn8IX_gINtsZ2ZJrjUPThtEUhUcBXH9g7kojdnNOd8-VrdJe8xTN2ia-my-GplF1Wpk1WmwVa3FEqH7u-9DDxwCbU989SfaMoE9KSEE_V2QR8N0EDG8UVpG_RJRKu5wCRHe0lU6g-SKBR1qLgecwoTFBvZPZahXA3wGOMux_ECXNQsqHV_xdaAuhB-sUlS_4cB-PakJ_WhkJO83SN1JRfIFA6iDR7vhFb-zVGMijkcjOl6zjE5LTU-UqBz2ibP432X8gZFgaJLuz4Hm-P00yeaWAYdX3W_rZMK5XUHMVBeHzYKhnOA7vdQnQOSdVFJwQon7HBncxZg_slqd9EavKz5hPfr_pEOJQLT2iTI_JYftrxGEqvEJozIPpvYtnsNSg4fCP30Uv_uetIs_mgPAidvDZgeSRsfXe8PKYHWkkSfedaS0DQTrm08rQx3hIPUoTPlaBgZ4IHGTGf-vxxd_lFMN-uDNl2c0qHs_aAtmDJYuG5Q9lJLuhMRpdxFkqW6Vlb8sor8w2IjCPFrL45XneZbLPP-31kV9dHXyBhoKiiJZXaZ-zZRSGcsL4r8lWMzahAyfOphR2fZbsHRwztrWI6Li-HrOoDo5Oq1Cko_2EiZSg5G59hB2CMfHeBtLJG1r-wkPm1A=s200-no?authuser=1'
                        roundedCircle
                        alt='dawin photo'
                    />
                    <h1 className='title'>
                        Welcome to{' '}
                        <span style={{ color: '#0070f3' }}>
                            Dawin&apos;s Space
                        </span>
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
        </Layout>
    );
};

Home.getInitialProps = async () => {
    const api = new PersonalDetailApi();
    const jobExperiences = await api.fetchJobExperiences();
    const educations = await api.fetchEducation();
    return { jobExperiences, educations };
};

export default Home;
