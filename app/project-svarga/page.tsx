import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const pages = [
    'project-svarga/Comic_P_001_002-min.webp',
    'project-svarga/Comic_P_001_003-min.webp',
    'project-svarga/Comic_P_001_004-min.webp',
    'project-svarga/Comic_P_001_005_006-min.webp',
    'project-svarga/Comic_P_001_007-min.webp',
    'project-svarga/Comic_P_001_008-min.webp',
    'project-svarga/Comic_P_001_009-min.webp',
    'project-svarga/Comic_P_001_010-min.webp',
    'project-svarga/Comic_P_001_011-min.webp',
    'project-svarga/Comic_P_001_012-min.webp',
    'project-svarga/Comic_P_001_013-min.webp'
];

const SvargaPage = () => {
    return (
        <Container className='text-center'>
            <Image
                src='project-svarga/svarga.svg'
                alt='svarga logo'
                className='mb-4'
            />
            <p>
                Project: Svarga is a manga that tells about the story of a dying
                world and the brave heroes that are trying to save it.
            </p>
            <p>
                Synopsis: In a dying world stricken with natural disasters after
                the first war between humans and gods, 3 nations are facing each
                other in a war to conquer Svarga, the last remaining habitable
                continent rich with natural resources. A princess of one of the
                warring nations escaped from her kingdom&apos;s grasp and meet
                with a ragtag band of freedom fighters notoriously known as sky
                pirates. Together, they journey across the world to gain power
                and bring an end to the war.
            </p>

            {pages.map((page, index) => {
                return (
                    <>
                        <Image
                            className='page-image'
                            src={page}
                            alt={`page ${index + 1}`}
                        />
                        <p>{index + 1}</p>
                    </>
                );
            })}

            <p>To be continued...</p>
        </Container>
    );
};

export default SvargaPage;
