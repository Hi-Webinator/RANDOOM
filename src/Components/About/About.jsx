import { Row, Col, Container, Image } from 'react-bootstrap'
import MainHeader from '../MainHeader/MainHeader';
import per1 from '../../assets/Images/man1.jpg';
import per2 from '../../assets/Images/man3.jpg';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import './about.css';
import React from 'react';
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
                            <ReactTyped
                                strings={["My mission is to make design easier."]}
                                typeSpeed={40}
                                backSpeed={50}
                            />
                        </h1>
                    </Col>

                    <Col xs={12} lg={5}>
                        <motion.p className='desc'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                        >
                            Lorem ipsum dolor sit amet consectetur.
                            Accumsan blandit pulvinar donec odio viverra
                            quam id. Sollicitudin sit urna lectus fermentum.
                            Sed sed dictumst nulla sit id non. Enim nulla sit
                            felis proin felis neque iaculis sit. Consequat enim
                            risus quam lorem neque. Ultrices felis faucibus
                            quisque eget pharetra dui semper.
                        </motion.p>
                    </Col>
                </Row>

                <Row className='d-flex align-items-center justify-content-between mb-5 pb-5'>
                    <Col xs={12} md={5} lg={5} className='mb-5 mb-md-0'>
                        <motion.div className="image per1 position-relative"
                            initial={{ x: -900, y: -120, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <Image src={per1} className='img-fluid' />
                        </motion.div>
                    </Col>
                    <Col xs={12} md={7} lg={7}>
                        <motion.div className="image per2 position-relative"
                            initial={{ x: 900, y: -120, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}>
                            <Image src={per2} className='img-fluid' />
                        </motion.div>
                    </Col>
                </Row>

                <div>
                    <motion.h1 className='fw-bold mb-4 text-center text-md-start'
                        initial={{ x: -500, y: -120, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Follow me on :
                    </motion.h1>
                </div>
                <Row className='text-center text-md-start pb-5'>
                    <Col xs={6} md={3} lg={3} className='mb-3 mb-md-0'>
                        <motion.h1 className="link fs-2"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay:0}}
                        >
                            Behance</motion.h1>
                    </Col>
                    <Col xs={6} md={3} lg={3} className='mb-3 mb-md-0'>
                        <motion.h1 className="link fs-2"
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay:.5}}
                        >
                            Twitter</motion.h1>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <motion.h1 className="link fs-2"
                            initial={{ opacity: 0, x: -300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay:1}}
                        >
                            Facebook</motion.h1>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <motion.h1 className="link fs-2"
                            initial={{ opacity: 0, x: -400 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay:1.5}}
                        >
                            Instagram</motion.h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
