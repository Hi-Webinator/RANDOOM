import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import MainHeader from '../MainHeader/MainHeader';
import contact from '../../assets/Images/lap.png';


import './contact.css';
const Contact = () => {
    return (
        <div className='contact mt-5 mb-5 pb-5'>
            <Container>
                <MainHeader
                    title="Contact Me"
                    subTitle="For Any Project Knock Us"
                />

                <Row className='mb-5 pb-5'>
                    <Col xs={12} lg={6} className='mb-4 mb-lg-0'>
                        <h1 className="title fw-bold">
                            Get in Touch With Us
                        </h1>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form>
                            <Form.Group className="mb-3 mb-lg-5" controlId="formGroupName">
                                <Form.Label className='mb-0'>Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3 mb-lg-5" controlId="formGroupSubject">
                                <Form.Label className='mb-0'>Subject</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-4 mb-lg-5" controlId="formGroupMessage">
                                <Form.Label className='mb-0'>Message</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Button className='mainBtn p-1 ps-4 pe-4' type='submit'>SEND</Button>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                            <iframe className='w-100 mb-5'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425506.1350062956!2d-7.916016634064607!3d33.572424539766914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1707489673542!5m2!1sen!2sma"
                                width="600" height="450" style={{ border: "0", width: "100 %"}} allowFullScreen=""
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                    </Col>
                    <Col xs={12}>
                        <div className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start">
                            <h1 className="fs-5 me-md-4 me-lg-5 mb-3 mb-md-0">Street Avenue,Morocco</h1>
                            <h1 className="fs-5 me-md-4 me-lg-5 mb-3 mb-md-0">+123xxxxxxxx</h1>
                            <h1 className="fs-5">email@example.com</h1>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact
