import { RiFacebookBoxFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";


import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className='footer pt-5 pb-4'>
            <Container>
                <div className="d-flex flex-column mb-5 text-center">
                    <h1 className="title fs-5">Get in Touch With Us</h1>
                    <h1 className="subTitle fs-1 fw-bold text-decoration-underline">email@exemple.com</h1>
                </div>
                <Row>
                    <Col xs={12} lg={4} className="d-flex justify-content-center mb-3 mb-lg-0">
                        <h1 className="fs-1"> AARONN</h1>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-center mb-3 mb-lg-0">
                        <div className="d-flex flex-column text-center text-lg-start">
                            <span className='fs-5'>Street Avenue xx, YY</span>
                            <span className='fs-5'>00-csd-12d-2</span>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-center">
                        <div className="d-flex flex-column ">
                            <span className='fs-5'>+98623xxxxxx</span>
                            <div className='d-flex align-items-center m-auto m-lg-0'>
                                <span className='fs-5 me-3'><RiFacebookBoxFill /></span>
                                <span className='fs-5 me-3'><RiInstagramFill /></span>
                                <span className='fs-5'><RiWhatsappFill /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <span className="line d-block mt-5 mb-3"></span>
                <div className="d-flex align-items-center justify-content-center fw-bold">
                    &copy; {date} Developed By Hi-Dev
                </div>
            </Container>
        </div>
    )
}

export default Footer
