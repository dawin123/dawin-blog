import React from 'react';
import type { NextPage } from 'next';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Layout } from '../../components/layout/layout';

const pageIds = [
    '1Gxr7rLLNxGiGYUZ-aaIVX8kNAEZF_le8',
    '14WeAV1To9bj0InJHcghfmbs5UwmK5uiS',
    '1gUrr54l_Dum0PAbu4R2M089AhwLKA5Wa',
    '1bTkiqXqy3E7WT9Vn3L3mu1BtWmvvWBkP',
    '1HYvnSsNfTd-rS6RnDmGbBm_TMXMA088_'
];

const SvargaPage: NextPage = () => {
    return (
        <Layout>
            <Container className='text-center'>
                <Image src='svarga.svg' alt='svarga logo' className='mb-4'/>
                <p>Project: Svarga is a manga that tells about the story of a dying world and the brave heroes that are trying to save it.</p>
                <p>Synopsis: In a dying world stricken with natural disasters after the first war between humans and gods, 3 nations are facing each other in a war 
                    to conquer Svarga, the last remaining habitable continent rich with natural resources. A princess of one of the warring nations escaped
                    from her kingdom&apos;s grasp and meet with a ragtag band of freedom fighters notoriously known as sky pirates.
                    Together, they journey across the world to gain power and bring an end to the war.
                </p>

                {pageIds.map((id, index) => {
                    return <>
                        <Image className='page-image' src={`https://drive.google.com/uc?export=view&id=${id}`} alt={`page ${index+1}`}/>
                        <p>{index+1}</p>
                    </>;
                })}

                <p>To be continued...</p>
            </Container>
        </Layout>
    );
};

export default SvargaPage;
