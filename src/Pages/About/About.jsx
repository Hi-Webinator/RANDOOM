import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Row, Col, Container } from "react-bootstrap";
import MainHeader from "../../Components/MainHeader/MainHeader";

import person1 from "../../Assets/man1.webp";
import person2 from "../../Assets/man2.webp";
import "./about.css";

const About = () => {
  const media = [
    { title: "behance", x: -100, delay: "0.3" },
    { title: "twitter", x: -150, delay: "0.8" },
    { title: "facebook", x: -150, delay: "1.3" },
    { title: "instagram", x: -150, delay: "2" },
  ];

  return (
    <div className="about mt-4 mt-lg-5 mb-5">
      <Container>
        <MainHeader title="About Me" subTitle="Little Brief About Me" />

        <Row className="about-row">
          <Col xs={12} lg={6}>
            <h1 className="title mb-3 mb-lg-0">
              <ReactTyped
                strings={["My mission is to make design easier."]}
                typeSpeed={40}
                backSpeed={50}
              />
            </h1>
          </Col>

          <Col xs={12} lg={5}>
            <motion.p
              className="desc mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              My mission is to make digital art accessible and valuable for
              everyone. I believe every creator deserves a place in the
              decentralized world. Through unique NFT designs and
              blockchain-native art, I help artists and collectors connect in
              meaningful ways. My work is driven by creativity, rarity, and a
              deep passion for the future of digital ownership — where art lives
              forever on the blockchain.
            </motion.p>
          </Col>
        </Row>

        <Row className="about-row">
          <Col xs={12} md={5} lg={5}>
            <motion.div
              className="image per1"
              initial={{ x: -900, y: -120, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <img src={person1} className="img-fluid" />
            </motion.div>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <motion.div
              className="image per2"
              initial={{ x: 900, y: -120, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <img src={person2} className="img-fluid" />
            </motion.div>
          </Col>
        </Row>

        <div className="media">
          <motion.h1
            className="media-title mb-4"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Follow me on :
          </motion.h1>

          <div className="media-links">
            {media.map((item, index) => {
              return (
                <motion.h2
                  key={index}
                  className="link"
                  initial={{ opacity: 0, x: item.x }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: item.delay }}
                >
                  {item.title}
                </motion.h2>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
