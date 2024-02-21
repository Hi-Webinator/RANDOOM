import { Button, Col, Container, Image, Row } from "react-bootstrap"
import two from '../../assets/Images/man1.jpg';
import CardProjects from "../ProjectsCard/CardProjects";
import pr1 from '../../assets/Images/pr1.jpeg'
import pr2 from '../../assets/Images/pr2.jpeg'
import pr3 from '../../assets/Images/pr3.jpeg'
import pr4 from '../../assets/Images/pr4.jpeg'
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";


import './hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero mt-5 mb-5">
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <motion.h1 className="title fs-1 mb-4 mb-md-5"
                                initial={{ x: -900 }}
                                animate={{ x: 0 }}
                                viewport={{ once:true }}
                                transition={{
                                    duration: .5,
                                }}
                            >
                                Adaptive Logo Design for Your Brand
                            </motion.h1>
                            <motion.button className="mainBtn ps-5 pe-5 p-3 text-capitalize"
                                initial={{ y: -500 }}
                                animate={{ y: 0 }}
                                viewport={{ once:true }}
                                transition={{
                                    duration: .5,
                                }}
                            >
                                explore more!
                                <span className="ms-2">
                                    <FaArrowRightLong />
                                </span>
                            </motion.button>
                        </Col>
                    </Row>

                    {/* //about */}
                    <section className="second pt-5 mt-5 mb-5">
                        <Row className="d-flex align-items-center justify-content-between">
                            <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                                <div className="d-flex flex-column">
                                    <motion.h1 className="fs-1 mb-3"
                                        initial={{ x: -300, y: -100, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                                        viewport={{ once:true }}
                                        transition={{ duration: 1 }}
                                    >
                                        Let’s get know about me closer
                                    </motion.h1>
                                    <motion.p className="mb-4 mb-md-5"
                                        initial={{ x: -300, y: -50, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                                        viewport={{ once:true }}
                                        transition={{ duration: 1, delay: .4 }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Facere in enim atque.
                                        Velit dolor incidunt impedit doloremque
                                        provident pra sunt tenetur cupiditate
                                        nihil veniam nostrum obcae.

                                    </motion.p>
                                    <motion.div className="text-center text-md-start"
                                        initial={{ x: -300, y: -50, opacity: 0 }}
                                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                                        viewport={{ once:true }}
                                        transition={{ duration: 1, delay: .5 }}>
                                        <Button className="mainBtn p-3 ps-4 pe-4">
                                            Discover More About Me
                                        </Button>
                                    </motion.div>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} className="d-flex justify-content-end">
                                <motion.div className="image position-relative"
                                    initial={{ y: 300, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once:true }}
                                    transition={{ duration: 1 }}

                                >
                                    <Image src={two} className="img-fluid" />
                                </motion.div>
                            </Col>
                        </Row>
                    </section>

                    {/* projects */}
                    <section className="third pt-5 mt-5">
                        <div className="text-center mb-5">
                            <motion.h1 className="fs-2 fw-bold mb-4"
                                initial={{ x: -900, y: 0, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once:true }}
                                transition={{ duration: 1 }}>
                                My Projects Highlight
                            </motion.h1>
                            <motion.button className="mainBtn p-2 ps-4 pe-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                viewport={{ once:true }}
                                transition={{ duration: 1, delay: 2 }}>
                                Explore More!
                                <span className="ms-2">
                                    <FaArrowRightLong />
                                </span>
                            </motion.button>
                        </div>
                        <Row>
                            <Col xs={12} md={6} lg={6} className="mb-5">
                                <motion.div
                                    initial={{ x: -300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once:true }}
                                    transition={{ duration: 1 }}
                                >
                                    <CardProjects
                                        image={pr1}
                                        title="Non Fungible Token -NFT- Digital Art"
                                        client="Hi-Dev"
                                        work="Logo Design & Development"
                                    />
                                </motion.div>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mb-5">
                                <motion.div
                                    initial={{ x: 300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once:true }}
                                    transition={{ duration: 1 }}
                                >
                                    <CardProjects
                                        image={pr2}
                                        title="Historical antique statue of david's head"
                                        client="Hi-Dev"
                                        work="Logo Design & Development"
                                    />
                                </motion.div>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mb-5 mb-lg-0">
                                <motion.div
                                    initial={{ x: -300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once:true }}
                                    transition={{ duration: 1, delay: .2 }}
                                >
                                    <CardProjects
                                        image={pr3}
                                        title="Virtual Museum and Metaverse internet"
                                        client="Hi-Dev"
                                        work="Logo Design & Development"
                                    />
                                </motion.div>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mb-0">
                                <motion.div
                                    initial={{ x: 300, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once:true }}
                                    transition={{ duration: 1, delay: .2 }}
                                >
                                    <CardProjects
                                        image={pr4}
                                        title="A hundred-dollar bill franklin in glasses"
                                        client="Hi-Dev"
                                        work="Logo Design & Development"
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </section>

                    {/* testimonial */}
                    <section className="four pt-4 pt-lg-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <motion.h5 className="fs-1 fw-bold"
                                initial={{ x: -300, y: -100, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once:true }}
                                transition={{ duration: 1 }}
                            >
                                Testimonial
                            </motion.h5>
                            {/* <span className="fs-1">
                                <img src={q} alt="" />
                            </span> */}
                        </div>
                        <Col lg={9} className="mb-3">
                            <motion.q
                                initial={{ x: -100, y: -100, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once:true }}
                                transition={{ duration: 1.5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minus nemo provident nam aspernatur quaerat perspiciatis
                                amet illo nesciunt asperiores cupiditate ipsam officiis
                                architecto ullam nobis commodi, iste aut consectetur animi
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minus nemo provident nam aspernatur quaerat perspiciatis
                                amet illo nesciunt asperiores cupiditate ipsam officiis
                                architecto ullam nobis commodi, iste aut consectetur animi
                            </motion.q>
                        </Col>

                        <motion.span className="fs-5 fw-bold d-flex justify-content-center justify-content-md-start"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once:true }}
                            transition={{ duration: 1.5, delay: .2 }}
                        >
                            -Hi Developer
                        </motion.span>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default Hero
