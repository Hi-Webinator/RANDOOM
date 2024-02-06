import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import WorkCard from '../WorksCard/WorkCard';
import w1 from '../../assets/Images/w-1.jpg'
import w2 from '../../assets/Images/w-2.png'
import w3 from '../../assets/Images/w-3.png'
import w4 from '../../assets/Images/w-4.jpg'
import w5 from '../../assets/Images/w-5.jpg'
import w6 from '../../assets/Images/w-6.png'
import w7 from '../../assets/Images/w-7.jpg'
import w8 from '../../assets/Images/w-8.jpg'

import './work.css';
import MainHeader from '../MainHeader/MainHeader';

const Work = () => {
    return (
        <div className='work mt-5 mb-5 pb-5'>
            <Container>
                <MainHeader
                    title="My works"
                    subTitle="showcase about works"
                />

                <Row className='mb-4'>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w2}
                            subTitle="NFT"
                            title="Bored Ape Monkey"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w1}
                            subTitle="NFT"
                            title="Dark Man"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w3}
                            subTitle="NFT"
                            title="Ape Primate Art"
                        />
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col xs={12} lg={6}>
                        <WorkCard
                            img={w4}
                            subTitle="NFT"
                            title="Bear Panda Island"
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <WorkCard
                            img={w5}
                            subTitle="NFT"
                            title="Abstract Art"
                        />
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w6}
                            subTitle="NFT"
                            title="Technology Metaverse"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w8}
                            subTitle="NFT"
                            title="Alien Ghost Sci-fi"
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        <WorkCard
                            img={w7}
                            subTitle="NFT"
                            title="Dream Fantasy Ghost"
                        />
                    </Col>

                </Row>

                <div className='text-center '>
                    <Button className='mainBtn text-uppercase p-2 ps-4 pe-4'>Load more works</Button>
                </div>
            </Container>
        </div>
    )
}

export default Work
