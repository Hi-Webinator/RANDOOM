import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardProjects from "../../Components/ProjectsCard/CardProjects";
import { projects } from "../../Data/config";

import { FaArrowRightLong } from "react-icons/fa6";
import person1 from "../../Assets/man1.webp";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Container>
          {/* Hero */}
          <div className="hero mb-3 mb-lg-0">
            <motion.h1
              className="title mb-4 mb-md-5"
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
            >
              Custom Logo Design Tailored to Your Brand
            </motion.h1>
            <motion.a
              href="/works"
              className="mainBtn btn"
              initial={{ x: 900 }}
              animate={{ x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
              }}
            >
              explore more!
              <span className="ms-2">
                <FaArrowRightLong />
              </span>
            </motion.a>
          </div>

          {/* About */}
          <section className="second mb-5">
            <Row className="d-flex align-items-center gap-4 gap-lg-0">
              <Col
                xs={12}
                lg={6}
                className="order-2 order-lg-1 text-center text-lg-start"
              >
                <motion.h1
                  className="title mb-3"
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Let’s get know about me closer
                </motion.h1>
                <motion.p
                  className="desc mb-4 mb-md-5"
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  I'm an NFT designer passionate about creating rare,
                  one-of-a-kind digital assets that live forever on the
                  blockchain. My work blends art, technology, and storytelling
                  to craft collections that captivate collectors worldwide.
                </motion.p>
                <motion.div
                  className="text-center text-md-start"
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <Link to="/about" className="mainBtn btn">
                    Discover More About Me
                  </Link>
                </motion.div>
              </Col>

              <Col
                xs={12}
                lg={6}
                className="order-1 order-lg-2 d-flex justify-content-end"
              >
                <motion.div
                  className="image position-relative"
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <img src={person1} className="img-fluid" />
                </motion.div>
              </Col>
            </Row>
          </section>

          {/* Projects */}
          <section className="third pt-3 pt-lg-5">
            <div className="text-center mb-5">
              <motion.h1
                className="title fs-2 mb-4"
                initial={{ x: -900 }}
                animate={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                My Projects Highlight
              </motion.h1>
              <motion.button
                className="mainBtn"
                initial={{ x: 900 }}
                animate={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                }}
              >
                Explore More!
                <span className="ms-2">
                  <FaArrowRightLong />
                </span>
              </motion.button>
            </div>

            <Row>
              {projects.map((item, index) => {
                return (
                  <Col xs={12} md={6} className="mb-4 mb-lg-5" key={index}>
                    <motion.div
                      initial={{ x: item.x, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: item.delay }}
                    >
                      <CardProjects
                        image={item.image}
                        title={item.title}
                        client="Hi Webinator"
                        work={item.work}
                      />
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </section>

          {/* Testimonial */}
          <section className="four mb-5">
            <motion.h5
              className="title mb-4"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Testimonial
            </motion.h5>

            <motion.div
              className="quote mb-3"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <q>
                Working with Hi Webinator was an incredible experience. He
                brought my vision to life with a stunning NFT collection that
                sold out in under 48 hours. His attention to detail, creativity,
                and deep understanding of the blockchain space is truly
                unmatched. Highly recommend to anyone serious about NFTs.
              </q>
            </motion.div>

            <motion.span
              className="author"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              -Hi Developer
            </motion.span>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Home;
