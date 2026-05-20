import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainHeader from "../../Components/MainHeader/MainHeader";
import { contactForm } from "../../Data/config";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact mt-4 mt-lg-5 mb-5">
      <Container>
        <MainHeader title="Contact Me" subTitle="For Any Project Knock Us" />

        <Row className="mb-5">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <h1 className="title">
              <ReactTyped
                strings={["Get in Touch With Us."]}
                typeSpeed={60}
                backSpeed={50}
              />
            </h1>
          </Col>

          <Col xs={12} lg={6}>
            <Form>
              {contactForm?.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: item.y, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: item.delay }}
                  >
                    <Form.Group
                      className="mb-3 mb-lg-5"
                      controlId={item.controlId}
                    >
                      <Form.Label className="mb-0">{item.label}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Button className="mainBtn p-1 ps-4 pe-4" type="submit">
                  SEND MESSAGE
                </Button>
              </motion.div>
            </Form>
          </Col>
        </Row>

        <motion.div
          className="map mb-4"
          initial={{ y: 400, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425506.1350062956!2d-7.916016634064607!3d33.572424539766914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1707489673542!5m2!1sen!2sma"
            loading="lazy"
            allowFullScreen="true"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <div className="d-flex flex-column flex-md-row justify-content-center text-center text-md-start">
          <h5
            className="me-md-4 me-lg-5 mb-3 mb-md-0"
            
          >
            Casablanca, Morocco
          </h5>

          <h5
            className="me-md-4 me-lg-5 mb-3 mb-md-0"
          
          >
            +212612xxxxxx
          </h5>

          <h5
           
          >
            randoom@example.com
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
