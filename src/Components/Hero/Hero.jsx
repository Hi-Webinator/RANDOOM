import { Button, Col, Container, Image, Row } from "react-bootstrap"
import two from '../../assets/Images/2.png';
import CardProjects from "../ProjectsCard/CardProjects";
import pr1 from '../../assets/Images/pr1.jpeg'
import pr2 from '../../assets/Images/pr2.jpeg'
import pr3 from '../../assets/Images/pr3.jpeg'
import pr4 from '../../assets/Images/pr4.jpeg'
// import q from '../../assets/Images/q.png';
// import { PiQuotes } from "react-icons/pi";

import './hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero mt-5 mb-5">
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1 className="title fs-1 mb-5">
                                Adaptive Logo Design for Your Brand
                            </h1>
                            <Button className="mainBtn ps-5 pe-5 p-3 text-capitalize">
                                explore more!
                                <span className="ms-2">...</span>
                            </Button>
                        </Col>
                    </Row>

                    {/* //about */}
                    <section className="second pt-5 mt-5 mb-5">
                        <Row className="d-flex align-items-center justify-content-between">
                            <Col xs={12} lg={6}>
                                <div className="d-flex flex-column">
                                    <h1 className="fs-1 mb-3">
                                        Let’s get know about me closer
                                    </h1>
                                    <p className="mb-5">
                                        Aaronn is a New York-based visual designer focusing
                                        on branding and visual identity. Her portfolio
                                        showcases her wide range of work, spanning books,
                                        posters and web design.
                                    </p>
                                    <div>
                                        <Button className="mainBtn p-3 ps-4 pe-4">
                                            Discover More About Me
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="d-flex justify-content-end">
                                <div className="image position-relative">
                                    <Image src={two} className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </section>

                    {/* projects */}
                    <section className="third pt-5 mt-5">
                        <div className="text-center mb-5">
                            <h1 className="fs-2 fw-bold mb-4">
                                My Projects Highlight
                            </h1>
                            <Button className="mainBtn p-2 ps-4 pe-4">
                                Explore More! ...
                            </Button>
                        </div>

                        <Row>
                            <Col xs={12} lg={6} className="mb-5">
                                <CardProjects
                                    image={pr1}
                                    title="Non Fungible Token -NFT- Digital Art"
                                    client="Hi-Dev"
                                    work="Logo Design & Development"
                                />
                            </Col>
                            <Col xs={12} lg={6} className="mb-5">
                                <CardProjects
                                    image={pr2}
                                    title="Historical antique statue of david's head"
                                    client="Hi-Dev"
                                    work="Logo Design & Development"
                                />
                            </Col>
                            <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                                <CardProjects
                                    image={pr3}
                                    title="Virtual Museum and Metaverse internet"
                                    client="Hi-Dev"
                                    work="Logo Design & Development"
                                />
                            </Col>
                            <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                                <CardProjects
                                    image={pr4}
                                    title="A hundred-dollar bill franklin in glasses"
                                    client="Hi-Dev"
                                    work="Logo Design & Development"
                                />
                            </Col>
                        </Row>
                    </section>

                    {/* testimonial */}
                    <section className="four pt-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h5 className="fs-1 fw-bold">Testimonial</h5>
                            {/* <span className="fs-1">
                                <img src={q} alt="" />
                            </span> */}
                        </div>
                        <Col lg={9} className="mb-3">
                            <q>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minus nemo provident nam aspernatur quaerat perspiciatis
                                amet illo nesciunt asperiores cupiditate ipsam officiis
                                architecto ullam nobis commodi, iste aut consectetur animi
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minus nemo provident nam aspernatur quaerat perspiciatis
                                amet illo nesciunt asperiores cupiditate ipsam officiis
                                architecto ullam nobis commodi, iste aut consectetur animi
                            </q>
                        </Col>

                        <span className="fs-5 fw-bold">-Hi Developer</span>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default Hero
