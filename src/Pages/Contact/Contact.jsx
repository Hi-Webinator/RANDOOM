import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import MainHeader from '../../Components/MainHeader/MainHeader';
import { motion, useScroll } from 'framer-motion';

import './contact.css';
import { ReactTyped } from 'react-typed';
const Contact = () => {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: "#FF9142",
                    transformOrigin: "center"
                }}
            >
            </motion.div>
            <div className='contact mt-5 mb-5 pb-5'>
                <Container>
                    <MainHeader
                        title="Contact Me"
                        subTitle="For Any Project Knock Us"
                    />

                    <Row className='mb-5 pb-5'>
                        <Col xs={12} lg={6} className='mb-4 mb-lg-0'>
                            <h1 className="title fw-bold">
                                <ReactTyped
                                    strings={["Get in Touch With Us"]}
                                    typeSpeed={60}
                                    backSpeed={50}
                                />
                            </h1>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .2 }}>
                                    <Form.Group className="mb-3 mb-lg-5" controlId="formGroupName">
                                        <Form.Label className='mb-0'>Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .3 }}>
                                    <Form.Group className="mb-3 mb-lg-5" controlId="formGroupSubject">
                                        <Form.Label className='mb-0'>Subject</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -300, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .4 }}>
                                    <Form.Group className="mb-4 mb-lg-5" controlId="formGroupMessage">
                                        <Form.Label className='mb-0'>Message</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -400, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: .5 }}>
                                    <Button className='mainBtn p-1 ps-4 pe-4' type='submit'>SEND</Button>
                                </motion.div>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <motion.div
                                initial={{ y: 400, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                            >
                                <iframe className='w-100 mb-5'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425506.1350062956!2d-7.916016634064607!3d33.572424539766914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1707489673542!5m2!1sen!2sma"
                                    width="600" height="450" style={{ border: "0", width: "100 %" }} allowFullScreen=""
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </motion.div>
                        </Col>
                        <Col xs={12}>
                            <div className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start">
                                <motion.h1 className="fs-5 me-md-4 me-lg-5 mb-3 mb-md-0"
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: .3 }}>
                                    Street Avenue,Morocco
                                </motion.h1>
                                <motion.h1 className="fs-5 me-md-4 me-lg-5 mb-3 mb-md-0"
                                    initial={{ x: -300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: .4 }}>
                                    +123xxxxxxxx
                                </motion.h1>
                                <motion.h1 className="fs-5"
                                    initial={{ x: -400, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: .5 }}>
                                    email@example.com
                                </motion.h1>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}


export default Contact
