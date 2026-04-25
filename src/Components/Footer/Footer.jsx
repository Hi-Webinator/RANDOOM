import { Col, Container, Row } from "react-bootstrap";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer pt-4 pt-lg-5 pb-4">
      <Container>
        <div className="d-flex flex-column mb-4 mb-lg-5 text-center">
          <h1 className="title">Get in Touch With Us</h1>
          <h1 className="subTitle">randoom@example.com</h1>
        </div>

        <Row>
          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center mb-3 mb-lg-0"
          >
            <h2 className="fw-bold">
              RAND
              <span className="title">OO</span>M
            </h2>
          </Col>

          <Col
            xs={6}
            lg={4}
            className="d-flex justify-content-center mb-3 mb-lg-0"
          >
            <div className="street d-flex flex-column">
              <span>Street Avenue xx, YY</span>
              <span className="text-center">00-csd-12d-2</span>
            </div>
          </Col>

          <Col xs={6} lg={4} className="phone d-flex justify-content-center">
            <div className="d-flex flex-column">
              <span className="fs-5">+98623xxxxxx</span>
              <div className="d-flex align-items-center justify-content-center gap-3 m-auto m-lg-0">
                <span>
                  <RiFacebookBoxFill size={20} />
                </span>
                <span>
                  <RiInstagramFill size={20} />
                </span>
                <span>
                  <RiWhatsappFill size={20} />
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <span className="line d-block mt-4 mt-lg-5 mb-4 mb-lg-3"></span>

        <div className="copyright gap-1">
          &copy; {date} Minted with ❤️ by
          <span>Hi Webinator</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
