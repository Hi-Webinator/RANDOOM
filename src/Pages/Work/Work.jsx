import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";

import MainHeader from "../../Components/MainHeader/MainHeader";
import WorkCard from "../../Components/WorksCard/WorkCard";

import w1 from "../../Assets/w-1.jpg";
import w2 from "../../Assets/w-2.png";
import w3 from "../../Assets/w-3.png";
import w4 from "../../Assets/w-4.jpg";
import w5 from "../../Assets/w-5.jpg";
import w6 from "../../Assets/w-6.png";
import w7 from "../../Assets/w-7.jpg";
import w8 from "../../Assets/w-8.jpg";

import "./work.css";

const Work = () => {
  return (
    <div className="work mt-5 mb-5 pb-5">
      <Container>
        <MainHeader title="My works" subTitle="showcase about works" />

        <Row className="mb-5 mb-lg-4 d-flex justify-content-center justify-content-lg-start">
          <Col xs={12} md={6} lg={4} className="mb-3 mb-lg-0">
            <motion.div
              initial={{ y: -400, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <WorkCard img={w2} subTitle="NFT" title="Bored Ape Monkey" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 mb-lg-0">
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <WorkCard img={w1} subTitle="NFT" title="Dark Man" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              initial={{ y: -400, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <WorkCard img={w3} subTitle="NFT" title="Ape Primate Art" />
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-5 mb-lg-4">
          <Col xs={12} md={6} lg={6} className="mb-3 mb-md-0">
            <motion.div
              initial={{ x: -200, y: -120, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <WorkCard img={w4} subTitle="NFT" title="Bear Panda Island" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <motion.div
              initial={{ x: 200, y: -120, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <WorkCard img={w5} subTitle="NFT" title="Abstract Art" />
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-4 d-flex justify-content-center justify-content-lg-start">
          <Col xs={12} md={6} lg={4} className="mb-3 mb-lg-0">
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <WorkCard img={w6} subTitle="NFT" title="Technology Metaverse" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3 mb-lg-0">
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <WorkCard img={w8} subTitle="NFT" title="Alien Ghost Sci-fi" />
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <WorkCard img={w7} subTitle="NFT" title="Dream Fantasy Ghost" />
            </motion.div>
          </Col>
        </Row>

        <div className="text-center ">
          <Button className="mainBtn text-uppercase p-2 ps-4 pe-4">
            Load more works
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Work;
