import { Row, Col, Container, Image } from 'react-bootstrap'
import MainHeader from '../MainHeader/MainHeader';
import per1 from '../../assets/Images/2.png';
import per2 from '../../assets/Images/person2.png';

import './about.css';
const About = () => {
    return (
        <div className='about mt-5 mb-5'>
            <Container>
                <MainHeader
                    title="About Me"
                    subTitle="Little Brief About Myself" />

                <Row className='d-flex align-items-center justify-content-between mb-5 pb-5'>
                    <Col xs={12} lg={6}>
                        <h1 className='title fw-bold mb-3 mb-lg-0'>
                            My mission is to make design easier.
                        </h1>
                    </Col>

                    <Col xs={12} lg={5}>
                        <p className='desc'>
                            Create custom Designs with AARONN that converts more
                            visitors than any website. With lots of unique design,
                            you can easily select a logo without hassle. Create custom
                            landing logos with AARONN that converts more visitors than
                            any website. With lots of revisions, you can easily build
                            a logo without porbolem.
                        </p>
                    </Col>
                </Row>

                <Row className='d-flex align-items-center justify-content-between mb-5 pb-5'>
                    <Col xs={12} md={5} lg={5} className='mb-5 mb-md-0'>
                        <div className="image per1 position-relative">
                            <Image src={per1} className='img-fluid' />
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={7}>
                        <div className="image per2 position-relative">
                            <Image src={per2} className='img-fluid' />
                        </div>
                    </Col>
                </Row>

                <div>
                    <h1 className='fw-bold mb-4 text-center text-md-start'>Follow me on :</h1>
                </div>
                <Row className='text-center text-md-start pb-5'>
                    <Col xs={6} md={3} lg={3} className='mb-3 mb-md-0'>
                        <h1 className="link fs-2">Behance</h1>
                    </Col>
                    <Col xs={6} md={3} lg={3} className='mb-3 mb-md-0'>
                        <h1 className="link fs-2">Twitter</h1>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <h1 className="link fs-2">Facebook</h1>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <h1 className="link fs-2">Instagram</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
